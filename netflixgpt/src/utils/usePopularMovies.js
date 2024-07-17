import { useEffect } from "react";

import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMoviesList } from "../utils/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const movieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addPopularMoviesList(jsonData));
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default usePopularMovies;
