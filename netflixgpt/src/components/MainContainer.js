import React from "react";
import MainVideoContainer from "./MainVideoContainer";
import MainVideoDesc from "./MainVideoDesc";
import useGetTrailer from "../utils/useGetTrailer";

const MainContainer = ({ mainMovie }) => {
  const { id, original_title, overview } = mainMovie;

  useGetTrailer(id);

  return (
    <div className="">
      <MainVideoContainer />
      <MainVideoDesc title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
