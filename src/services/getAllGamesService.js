import http from "./httpServices";

const getAllGamesService = () => {
    return http.get("/games");
}
 
export default getAllGamesService;