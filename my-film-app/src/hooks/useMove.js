
import { getOneGenre } from "@/services/getGenre";
import { getAllMovie, getMovieById } from "@/services/getMovie";
import {useQuery} from "@tanstack/react-query";

export const useGetMovies = () =>
    useQuery ({
      queryKey: ["get-movies"],
      queryFn: getAllMovie,
      retry: false,
      refetchOnWindowFocus: true,
    });

 export const useGetMoviesByGenre = (id) =>
      useQuery ({
        queryKey: ["get-movies-by-genre",id],
        queryFn:()=> getOneGenre(id),
        retry: false,
        refetchOnWindowFocus: true,
  });

  export const useGetMovieById = (id) =>
    useQuery ({
      queryKey: ["get-movies-by-id",id],
      queryFn:()=> getMovieById(id),
      retry: false,
      refetchOnWindowFocus: true,
});
 