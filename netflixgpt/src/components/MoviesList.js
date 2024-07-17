import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const MoviesList = ({ movieList, title }) => {
  return (
    <div>
      <h1 className="text-white font-semibold text-xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar ">
        {movieList.map((item) => (
          <MovieCard cardList={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
