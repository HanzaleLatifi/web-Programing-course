import http from "./httpServices";

export function  getAllGenre() {
    return  http.get(`/genres`).then(({ data }) => data);
  }

  export function  getOneGenre(id) {
    return  http.get(`/genres/${id}/movies`).then(({ data }) => data);
  }