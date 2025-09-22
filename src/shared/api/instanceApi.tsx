import axios from "axios";
import { LOCAL_USER_AUTH_KEY, BASE_SERVER_URL } from "../consts/consts";

export const $api = axios.create({
    baseURL: BASE_SERVER_URL,
    headers: { 'authorization': localStorage.getItem(LOCAL_USER_AUTH_KEY) }
})