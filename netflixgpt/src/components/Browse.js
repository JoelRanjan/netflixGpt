import React from "react";
import Header from "./Header";
import useGetMovies from "../utils/useGetMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../utils/usePopularMovies";
import useGetTopRatedMovies from "../utils/useGetTopRatedMovies";
import useGetUpcomingMovies from "../utils/useGetUpcomingMovies";

const Browse = () => {
  useGetMovies();
  usePopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  const getMoviesList = useSelector(
    (store) => store.movies?.nowPlaying?.results
  );
  if (!getMoviesList) return;

  const mainMovie = getMoviesList[0];

  return (
    <div className=" bg-black">
      <div className="relative">
        <Header />
        <MainContainer mainMovie={mainMovie} />
      </div>

      <div className="">
        <SecondContainer />
      </div>
    </div>
  );
};

export default Browse;
