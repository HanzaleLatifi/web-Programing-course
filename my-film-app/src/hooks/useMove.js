
import { getAllMovie } from "@/services/getMovie";
import {useQuery} from "@tanstack/react-query";

export const useGetMovies = () =>
    useQuery ({
      queryKey: ["get-movies"],
      queryFn: getAllMovie,
      retry: false,
      refetchOnWindowFocus: true,
    });