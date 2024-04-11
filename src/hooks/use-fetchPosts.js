import { useState, useEffect, useCallback } from "react";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);

  const endpoint = 'http://127.0.0.1:8000/api/posts';

  const fetchData = useCallback(async () => {
    setIsPostsLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      setPostsError(error);
      console.error(error);
    } finally {
      setIsPostsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { posts, isPostsLoading, postsError };

}

export default useFetchPosts;
