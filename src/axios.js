import axios from "axios";

// this means every time we call instance, the url will start with this base url and append the next parameters
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
