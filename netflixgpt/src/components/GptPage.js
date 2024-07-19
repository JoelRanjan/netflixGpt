import React from "react";

const GptPage = () => {
  return (
    <div>
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="logo"
          className=" relative"
        />
      </div>
      <div className="absolute m-60 mt-36 ml-[400px]">
        <input
          type="text"
          className="w-[450px] h-8 rounded-lg opacity-85 bg-black text-white px-3"
          placeholder="  Search Here...."
        />
        <button className="bg-red-600 text-white px-4 m-2 h-8 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default GptPage;
