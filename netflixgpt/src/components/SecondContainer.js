import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import { language } from "../utils/langConstants";

const SecondContainer = () => {
  const selectedLang = useSelector((store) => store.lang.lang);

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlaying.results
  );

  const popularMoviesL = useSelector(
    (store) => store.movies.popularMovies.results
  );

  const upPopularMovies = popularMoviesL ? popularMoviesL.slice(2) : [];

  const topRatedMoviesL = useSelector(
    (store) => store.movies.topRatedMovies.results
  );

  const upcomingMoviesL = useSelector(
    (store) => store.movies.upcomingMovies.results
  );
  const updatedUpcomingMovies = popularMoviesL ? popularMoviesL.slice(2) : [];
  return (
    <div className="relative z-10 top-[700px] bg-black w-screen pl-4">
      <div>
        <MoviesList
          movieList={nowPlayingMovies}
          title={language[selectedLang].yourNextWatch}
        />
        {popularMoviesL && (
          <MoviesList
            movieList={upPopularMovies}
            title={language[selectedLang].popular}
          />
        )}
        {topRatedMoviesL && (
          <MoviesList
            movieList={topRatedMoviesL}
            title={language[selectedLang].topRated}
          />
        )}
        {upcomingMoviesL && (
          <MoviesList
            movieList={updatedUpcomingMovies}
            title={language[selectedLang].upcoming}
          />
        )}
      </div>
    </div>
  );
};

export default SecondContainer;
