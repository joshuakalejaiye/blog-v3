import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { heroLoaded: false, lastVisitedSection: "home" },
  reducers: {
    setHeroLoadingState(state, action) {
      return action.payload;
    },
    setLastVisitedSection(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});
