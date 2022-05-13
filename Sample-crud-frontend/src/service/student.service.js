import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getAll');
}

const remove = id => {
    return httpClient.delete(`/deleteSt/${id}`);
}
const create = data => {
    return httpClient.post("/add", data);
}

const get = id => {
    return httpClient.get(`/getSt/${id}`);
}

const update = data => {
    return httpClient.put('/update', data);
}
export default { getAll,remove,create,get,update};