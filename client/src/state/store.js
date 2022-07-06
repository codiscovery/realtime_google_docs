import { configureStore } from "@reduxjs/toolkit";
import textStyleReducer from "./reducers/textStyle";

export const store = configureStore({
  reducer: {
    textStyle: textStyleReducer,
  },
});
