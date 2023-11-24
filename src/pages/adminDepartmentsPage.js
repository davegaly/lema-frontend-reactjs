import React, { useEffect, useState } from "react";
import lemaBEConnector from '../lemaBE/lemaBeConnector.mjs';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const AdminDepartmentsPage = () => {
    
    // states
    const [recordsList, setRecordsList] = useState([])
    const [currentEditId, setCurrentEditId] = useState(0)
    const [currentEditName, setCurrentEditName] = useState('')

    // methods
    const getRecordsList = async () => {
      let response = await lemaBEConnector.departments.listAll(); 
      setRecordsList(response);
    }
    const getSingleRecord = async () => {
      let response = await lemaBEConnector.departments.getbyid(currentEditId); 
      setCurrentEditName(response.name);
    }
    const saveRecord = async () => {
      let response = await lemaBEConnector.departments.save(
        {id:departmentEditId, name:departmentEditName}
      );
      getRecordsList();
    }
  
    // events
    const listEditClick = (recordId) => {
      setCurrentEditId(recordId);
    }
    const saveClick = () => {
      saveRecord();
    }  
    const rowClick = (e) => {
      setCurrentEditId(e.data.id);
    }

    // effects
    useEffect(() => {getRecordsList()}, [])
    useEffect(() => {
      if (currentEditId > 0) {
        getSingleRecord();
      }
    }, [currentEditId]);

    // render
    return (
        <div>
            <h1>Departments management</h1>
            <div>
              <DataTable value={recordsList} onRowClick={rowClick}>
                  <Column field="name" header="Name"></Column>
              </DataTable>
            </div>
            <div>
              <InputText value={currentEditName} onChange={(e) => setCurrentEditName(e.target.value)} />
              <Button label="Submit" onClick={()=>saveClick()}/>
            </div>
        </div>
    )
};
  
export default AdminDepartmentsPage;