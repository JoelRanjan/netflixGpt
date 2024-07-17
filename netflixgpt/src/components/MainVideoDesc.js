import React from "react";

const MainVideoDesc = ({ title, overview }) => {
  return (
    <div className="absolute z-10 pt-[250px] text-white px-10 bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="w-1/4 mt-4">{overview}</p>
      <div className="flex mt-4">
        <button className="bg-white text-black p-1 px-4 mr-2 rounded-lg w-28">
          {">"} Play
        </button>
        <button className="bg-white text-white p-1 px-4 mr-2 rounded-lg w-28 bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainVideoDesc;
