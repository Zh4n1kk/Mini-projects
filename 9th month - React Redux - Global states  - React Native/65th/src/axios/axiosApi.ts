import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://th-e3a2e-default-rtdb.europe-west1.firebasedatabase.app/'
})