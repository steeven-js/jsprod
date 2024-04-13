import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { _setPosts } from "src/redux/reducer/posts";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);

  const dispatch = useDispatch();

  const endpoint = 'http://127.0.0.1:8000/api/posts';

  const fetchData = useCallback(async () => {
    setIsPostsLoading(true);

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setPosts(result.data);
      dispatch(_setPosts(result.data));
    } catch (error) {
      setPostsError(error.message);
      console.error(error);
    } finally {
      setIsPostsLoading(false);
    }
  }, [dispatch, endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { posts, isPostsLoading, postsError };
}

export default useFetchPosts;
