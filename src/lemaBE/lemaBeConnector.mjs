const connector = {}

// DEPARTMENTS
const departments = {}
departments.listAll = async () => {

    let result = {};
    let department1 = {"guid":"abcde1","name":"HR"}
    let department2 = {"guid":"usifh1","name":"Sintesi Agenzie"}
    let department3 = {"guid":"sicui1","name":"Sintesi HD 1"}
    result.push(department1);
    result.push(department2);
    result.push(department3);
    return result;

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