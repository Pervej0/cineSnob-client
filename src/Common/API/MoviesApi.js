import axios from "axios";

const MoviesApi = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export default MoviesApi;
