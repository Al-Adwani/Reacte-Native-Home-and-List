// import axois step 5
import axios from "axios";

export const baseUrl = "http://192.168.8.130:8000";

export const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});
