import http from "./httpServices";

export function  getAllMovie() {
    return  http.get(`/movies`).then(({ data }) => data.data);
  }