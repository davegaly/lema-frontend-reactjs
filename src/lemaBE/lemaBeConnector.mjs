const connector = {}

const LEMABACKEND_ROOT_URL = process.env["REACT_APP_LEMABACKEND_ENDPOINT"];

// DEPARTMENTS
const departments = {}
departments.listAll = async () => {
    let response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/listall");
    return response;
}
departments.getbyid = async (id) => {
    let response = await axios.get(LEMABACKEND_ROOT_URL + "/api/departments/getbyid/" + id);
    return response;
}
departments.save = async (params) => {
    let response = await axios.post(LEMABACKEND_ROOT_URL + "/api/departments/save", params);
    return response;
}
connector.departments = departments;

export default connector;