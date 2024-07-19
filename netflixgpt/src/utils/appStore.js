import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import langSlice from "./langSlice";
import togglePageSlice from "./togglePageSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    lang: langSlice,
    gpt: togglePageSlice,
  },
});

export default appStore;
