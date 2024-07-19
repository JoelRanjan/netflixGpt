import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import langSlice from "./langSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    lang: langSlice,
  },
});

export default appStore;
