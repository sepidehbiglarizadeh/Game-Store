import http from "./httpServices";

const getAllGamesService = () => {
    return http.get(`/games?key=${process.env.REACT_APP_API_KEY}`);
}
 
export default getAllGamesService;