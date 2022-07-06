import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: `Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Ex eius
  nam numquam neque. Voluptatibus laborum rem, corporis accusantium,
  distinctio velit incidunt ea nostrum amet deserunt et aut in quas
  voluptatem!`,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeBold: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
