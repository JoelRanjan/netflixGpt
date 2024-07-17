import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "./constants";
import { mainTrailer } from "./movieSlice";

const useGetTrailer = (id) => {
  const dispatch = useDispatch();
  const api =
    "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
  const videoDataById = async () => {
    const data = await fetch(api, options);
    const jsonData = await data.json();
    const trailerData = jsonData.results.filter(
      (item) => item.type === "Trailer"
    );
    if (trailerData) {
      dispatch(mainTrailer(trailerData[0]));
    } else {
      dispatch(mainTrailer(jsonData.results[0]));
    }
  };

  useEffect(() => {
    videoDataById();
  });
};

export default useGetTrailer;
