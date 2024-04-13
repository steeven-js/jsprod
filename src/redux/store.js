import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './reducer/posts';

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
});
