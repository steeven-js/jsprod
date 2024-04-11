import { useState, useEffect, useCallback } from "react";

const useFetchPost = (id) => {
  const [post, setPost] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);

  const endpoint = `http://127.0.0.1:8000/api/posts/${id}`;

  const fetchData = useCallback(async () => {
    setIsPostLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setPost(result);
    } catch (error) {
      setPostError(error);
      console.error(error);
    } finally {
      setIsPostLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { post, isPostLoading, postError };

}

export default useFetchPost;
