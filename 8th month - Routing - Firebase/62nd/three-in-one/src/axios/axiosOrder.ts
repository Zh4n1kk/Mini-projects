import axios from "axios";

export const axiosOrder = axios.create({
    baseURL: 'https://hw-62-318da-default-rtdb.firebaseio.com/'
})