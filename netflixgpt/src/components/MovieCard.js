import React from "react";
import { imgUrl } from "../utils/constants";

const MovieCard = ({ cardList }) => {
  const posterPath = cardList.poster_path;
  return (
    <div className="text-white py-2 my-2  ml-1 flex flex-shrink-0">
      <img
        className="h-32 w-60 rounded-l transform transition duration-300 ease-in-out hover:scale-110 hover:z-10"
        src={imgUrl + posterPath}
        alt="dop"
      />{" "}
    </div>
  );
};

export default MovieCard;
