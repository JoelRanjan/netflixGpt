import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlaying: [],
    trailer: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    addMoviesList: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMoviesList: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMoviesList: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMoviesList: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    mainTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addMoviesList,
  mainTrailer,
  addPopularMoviesList,
  addTopRatedMoviesList,
  addUpcomingMoviesList,
} = movieSlice.actions;
export default movieSlice.reducer;
