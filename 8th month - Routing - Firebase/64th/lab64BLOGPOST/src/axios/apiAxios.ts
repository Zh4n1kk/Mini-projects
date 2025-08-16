import axios from "axios";

const BASE_URL = 'https://th-e3a2e-default-rtdb.europe-west1.firebasedatabase.app/'

export const apiAxios = axios.create({
    baseURL: `${BASE_URL}`
})