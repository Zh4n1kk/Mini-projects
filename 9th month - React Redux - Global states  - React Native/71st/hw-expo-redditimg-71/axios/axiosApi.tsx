import axios from "axios";

export const axiosApi = axios.create({baseURL: 'https://www.reddit.com/r/pics.json'})
