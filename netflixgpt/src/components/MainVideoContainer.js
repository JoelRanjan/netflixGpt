import React from "react";
import { useSelector } from "react-redux";

const MainVideoContainer = () => {
  const videoData = useSelector((store) => store.movies.trailer);
  const { key } = videoData;
  return (
    <div className="absolute bg-gradient-to-t from-black">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?si=_CyRtaPwGuc2GUWd&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
      ></iframe>
    </div>
  );
};

export default MainVideoContainer;
