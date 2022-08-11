import { createSlice } from "@reduxjs/toolkit";

import changeStyleBase from "../../utils/dom/changeStyleBase";
import changeColorAction from "./actions/changeColor";
import changeAlignmentAction from "./actions/changeAlignment";

const initialState = {
  content: `Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Ex eius
  nam numquam neque. Voluptatibus laborum rem, corporis accusantium,
  distinctio velit incidunt ea nostrum amet deserunt et aut in quas
  voluptatem!`,
  externalContent: "",
  contentRef: null,
};

export const textStyleSlice = createSlice({
  name: "textStyle",
  initialState,
  reducers: {
    setContentRef: (state, action) => {
      state.contentRef = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setExternalContent: (state, action) => {
      state.externalContent = action.payload;
    },
    changeBold: changeStyleBase({
      stylePropertyName: "fontWeight",
      stylePropertyValue: "bold",
    }),
    changeItalic: changeStyleBase({
      stylePropertyName: "fontStyle",
      stylePropertyValue: "italic",
    }),
    changeUnderline: changeStyleBase({
      stylePropertyName: "textDecoration",
      stylePropertyValue: "underline",
    }),
    changeColor: changeColorAction,
    changeAlignment: changeAlignmentAction,
  },
});

// Action creators are generated for each case reducer function
export const {
  changeBold,
  changeColor,
  changeItalic,
  changeUnderline,
  changeAlignment,
  setContent,
  setContentRef,
  setExternalContent,
} = textStyleSlice.actions;

export default textStyleSlice.reducer;
