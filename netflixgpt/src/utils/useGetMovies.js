import { useEffect } from "react";

import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesList } from "../utils/movieSlice";

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const movieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addMoviesList(jsonData));
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default useGetMovies;
