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
      const result = await response.json();
      setPosts(result);
      dispatch(_setPosts(result));
    } catch (error) {
      setPostsError(error);
      console.error(error);
    } finally {
      setIsPostsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Attente de la promesse
  useEffect(() => {
    if (!isPostsLoading && posts.length > 0) {
      // Les données sont prêtes, vous pouvez les retourner ici
      console.log("Posts Data is ready");
    }
  }, [isPostsLoading, posts]);

  return { posts, isPostsLoading, postsError };
}

export default useFetchPosts;
