import axios from "axios";

export const axiosOrder = axios.create({
    baseURL: 'https://rd-a70c6-default-rtdb.europe-west1.firebasedatabase.app/'
})