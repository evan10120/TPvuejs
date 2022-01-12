import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/messages'

async function getMessages () {
    return await axios.get(BASE_URL)
}

async function getMessage (id) {
    return await axios.get(BASE_URL+'/'+id)
}

async function postMessage (data) {
    return await axios.post(BASE_URL, data)
}

async function putMessage(id, data) {
    return await axios.put(BASE_URL+'/'+id, data)
}

async function deleteMessage(id) {
    return await axios.delete(BASE_URL+'/'+id)
}

export {getMessages, getMessage, postMessage, putMessage, deleteMessage}
