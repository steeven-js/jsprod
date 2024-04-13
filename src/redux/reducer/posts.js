import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    _setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { _setPosts } = postsSlice.actions;

export default postsSlice.reducer;
