import { createSlice } from "@reduxjs/toolkit";

const togglePageSlice = createSlice({
  name: "togglePage",
  initialState: {
    showGptPage: false,
  },
  reducers: {
    togglePage: (state) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { togglePage } = togglePageSlice.actions;
export default togglePageSlice.reducer;
