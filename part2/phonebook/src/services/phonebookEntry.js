import axios from "axios";
const baseUrl = 'http://localhost:3001/phoneBook'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (object) => {
    const request = axios.post(baseUrl, object)
    return request.then(response => response.data)
}

const deleteEntry = (object) => {

    const request = axios.delete(`${baseUrl}?id=${object.id}`)
    console.log(object);
    return request.then(response => response.data)
}

export default {getAll, create, deleteEntry}