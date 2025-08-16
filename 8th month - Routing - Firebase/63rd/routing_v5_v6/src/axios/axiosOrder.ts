import axios from "axios";


export const axiosOrder = axios.create({
    baseURL: 'https://burger-project-ajs-22-default-rtdb.firebaseio.com/'
})