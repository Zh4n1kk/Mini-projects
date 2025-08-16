import axios from "axios";

export const axiosApi = axios.create({baseURL: 'https://pizzeriaadminclient-default-rtdb.europe-west1.firebasedatabase.app/'})