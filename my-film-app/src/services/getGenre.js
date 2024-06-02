import http from "./httpServices";

export function  getAllGenre() {
    return  http.get(`/genres`).then(({ data }) => data);
  }