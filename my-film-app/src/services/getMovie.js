import http from "./httpServices";

export function  getAllMovie() {
    return  http.get(`/movies`).then(({ data }) => data.data);
  }

  export function  getMovieById(id) {
    return  http.get(`/movies/${id}`).then(({ data }) => data);
  }