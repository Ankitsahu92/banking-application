import axios from "axios";

// create an instance of axios
const api = axios.create({
    baseURL: "/api",
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((req: any) => {
    // const token: string | null = localStorage.getItem("token");
    // if (token) {
    //     req.headers.common["x-auth-token"] = token;
    // }
    return req;
});
export default api;
// creates an instance of the axios )
