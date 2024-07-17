import { useEffect } from "react";

import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMoviesList } from "../utils/movieSlice";

export const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const movieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addTopRatedMoviesList(jsonData));
  };
  useEffect(() => {
    movieData();
  }, []);
};

export default useGetTopRatedMovies;
