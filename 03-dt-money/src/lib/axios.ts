import axios from "axios";

export const useFetch = axios.create({
  baseURL: "http://localhost:3000/",
})