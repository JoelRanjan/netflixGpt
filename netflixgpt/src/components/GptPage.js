import React, { useRef } from "react";
import openai from "../utils/openai";
import { openAiKey } from "../utils/constants";

const GptPage = () => {
  const [searchItem] = useRef(null);

  console.log(openAiKey);

  const searchInput = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "top 10 hindi movies" }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
  };

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
          ref={searchItem}
          type="text"
          className="w-[450px] h-8 rounded-lg opacity-85 bg-black text-white px-3"
          placeholder="  Search Here...."
        />
        <button
          className="bg-red-600 text-white px-4 m-2 h-8 rounded-lg"
          onClick={searchInput}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GptPage;
