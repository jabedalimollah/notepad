import { configureStore } from "@reduxjs/toolkit";
import notebookReducer from "../slice/notebookSlice";

export const store = configureStore({
  reducer: {
    notebook: notebookReducer,
  },
});
