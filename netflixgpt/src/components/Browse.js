import React from "react";
import Header from "./Header";
import useGetMovies from "../utils/useGetMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../utils/usePopularMovies";
import useGetTopRatedMovies from "../utils/useGetTopRatedMovies";
import useGetUpcomingMovies from "../utils/useGetUpcomingMovies";
import GptPage from "./GptPage";

const Browse = () => {
  useGetMovies();
  usePopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  const gptPage = useSelector((store) => store.gpt.showGptPage);

  const getMoviesList = useSelector(
    (store) => store.movies?.nowPlaying?.results
  );
  if (!getMoviesList) return;

  const mainMovie = getMoviesList[0];

  return (
    <div className="bg-black ">
      <div className="relative">
        <Header />
        {gptPage ? (
          <>
            <MainContainer mainMovie={mainMovie} />
            <SecondContainer />
          </>
        ) : (
          <GptPage />
        )}
      </div>
    </div>
  );
};

export default Browse;
