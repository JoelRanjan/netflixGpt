import { useEffect } from "react";

import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMoviesList } from "../utils/movieSlice";

export const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMoviesList(jsonData));
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default useGetUpcomingMovies;
