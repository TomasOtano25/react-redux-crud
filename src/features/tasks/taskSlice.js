import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: () => {},
  },
});

export const taskSelector = (state) => state.tasks;

export default taskSlice.reducer;
