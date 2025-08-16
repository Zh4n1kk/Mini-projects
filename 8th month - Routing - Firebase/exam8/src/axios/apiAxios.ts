import axios from "axios";

const BASE_URL = 'https://exam-8-d8312-default-rtdb.europe-west1.firebasedatabase.app/'

export const apiAxios = axios.create({
    baseURL: `${BASE_URL}`
})