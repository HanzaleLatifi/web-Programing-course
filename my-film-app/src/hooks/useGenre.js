
import { getAllGenre } from "@/services/getGenre";
import {useQuery} from "@tanstack/react-query";

export const useGetGenres = () =>
    useQuery ({
      queryKey: ["get-genres"],
      queryFn: getAllGenre,
      retry: false,
      refetchOnWindowFocus: true,
    });

   