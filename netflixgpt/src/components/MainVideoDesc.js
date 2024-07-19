import React from "react";
import { language } from "../utils/langConstants";
import { useSelector } from "react-redux";

const MainVideoDesc = ({ title, overview }) => {
  const selectedLang = useSelector((store) => store.lang.lang);
  return (
    <div className="absolute z-10 pt-[250px] text-white px-10 bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="w-1/4 mt-4">{overview}</p>
      <div className="flex mt-4">
        <button className="bg-white text-black p-1 px-4 mr-2 rounded-lg w-28">
          {language[selectedLang].play}
        </button>
        <button className="bg-white text-white p-1 px-4 mr-2 rounded-lg w-28 bg-opacity-30">
          {language[selectedLang].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default MainVideoDesc;
