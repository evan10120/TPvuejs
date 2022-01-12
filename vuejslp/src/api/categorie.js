import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/categories'

async function getCategories () {
    return await axios.get(BASE_URL)
}

async function getCategorie (id) {
    return await axios.get(BASE_URL+'/'+id)
}

async function postCategorie (data) {
    return await axios.post(BASE_URL, data)
}

async function getCategorieById (id, data) {
    return await axios.get(id,data)
}

async function putCategorie (id, data) {
    return await axios.put(BASE_URL+'/'+id,data)
}

async function deleteCategorie (id) {
    return await axios.delete(BASE_URL+'/'+id)
}

export {getCategories, getCategorie, postCategorie, putCategorie, deleteCategorie, getCategorieById}
