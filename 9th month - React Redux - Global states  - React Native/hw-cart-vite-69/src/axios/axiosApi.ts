import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://burger-project-ajs-22-28f02-default-rtdb.europe-west1.firebasedatabase.app/'
})

