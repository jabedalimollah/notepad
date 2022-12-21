import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "http://localhost:5000/users";
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const serverData = await axios.get(baseURL);
  return serverData.data;
});
export const createPost = createAsyncThunk(
  "post/createPost",
  async (postData) => {
    await axios.post(baseURL, postData);
  }
);
export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  await axios.delete(`${baseURL}/${id}`);
});
export const updatePost = createAsyncThunk(
  "post/updatePost",
  async ({ details, idss }) => {
    // console.log("ee", details, idss);
    const a = await axios.put(`${baseURL}/${idss}`, details);
    return a.data;
  }
);
export const notebookSlice = createSlice({
  name: "counter",
  initialState: {
    posts: [],
    loading: "idle",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    searchCondition: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = "error";
    });
  },
});

export const { increment, decrement, searchCondition } = notebookSlice.actions;

export default notebookSlice.reducer;
