import axios from '@/api/axios.js'

const getCharacters = apiUrl => {
    return axios.get(apiUrl)
}

export default {
    getCharacters
}