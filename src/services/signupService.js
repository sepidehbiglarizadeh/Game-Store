import http from "./httpServices";

const signupService = (data) => {
    return http.post("/users",data)
}
 
export default signupService;