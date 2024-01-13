import axios from "axios"

export const API_BASE_URL = "http://localhost:8080"

const token = localStorage.getItem("jwt-token")

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${token}`,
        Content_Type: "application/json"
    }
})