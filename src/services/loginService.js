import http from "./httpServices";

const loginService = (data) => {
    return http.post("/login",data);
}
 
export default loginService;