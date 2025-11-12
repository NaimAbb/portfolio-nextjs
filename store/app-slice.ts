import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNavLink: "Home",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeActiveNavLink(state, action) {
      state.activeNavLink = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
