import axios from "axios";
import { AppConstant } from "./AppConstant";

// create an instance of axios
const api = axios.create({
    baseURL: "/api",
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((req: any) => {
    const token: string | null = localStorage.getItem(AppConstant.Token);
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});
export default api;
// creates an instance of the axios )
