import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // state = [...state, action.payload];
      state.push(action.payload);
    },
    updateTask: (state, action) => {},
    removeTask: (state, action) => {},
  },
});

export const { addTask, updateTask } = taskSlice.actions;

export const taskSelector = (state) => state.tasks;

export default taskSlice.reducer;
