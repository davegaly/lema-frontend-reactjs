import React, { useEffect, useState } from "react";
import lemaBEConnector from '../lemaBE/lemaBeConnector.mjs';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const AdminDepartmentsPage = () => {

    const [departmentsList, setDepartmentsList] = useState([])
    const [departmentEditId, setDepartmentEditId] = useState(0)
    const [departmentEditName, setDepartmentEditName] = useState('')

    const getList = async () => {
        let response = await lemaBEConnector.departments.listAll(); 
        setDepartmentsList(response);
    }

    const rowClick = (e) => {
        //console.log(e.data.id);
        //setDepartmentEditId(e.data.id);
    }

    useEffect(() => {getList()}, [])

    return (
        <div>
            <h1>Departments management</h1>
            <div>
              <DataTable value={departmentsList} onRowClick={rowClick}>
                  <Column field="name" header="Name"></Column>
              </DataTable>
            </div>
            <div>
              <InputText value={departmentEditName} onChange={(e) => setDepartmentEditName(e.target.value)} />
              <Button label="Submit" onClick={()=>saveClick()}/>
            </div>
        </div>
    )
};
  
export default AdminDepartmentsPage;