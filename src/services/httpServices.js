import axios from "axios";

axios.defaults.baseURL ="https://api.rawg.io/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
