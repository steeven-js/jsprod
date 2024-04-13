import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { _setPosts } from "src/redux/reducer/posts";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    setIsPostsLoading(true);

    try {
      const endpoint = `http://127.0.0.1:8000/api/posts?page=${currentPage}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();
      setPosts(result.data);
      setTotalPages(result.last_page);
      dispatch(_setPosts(result.data));
    } catch (error) {
      setPostsError(error.message);
      console.error(error);
    } finally {
      setIsPostsLoading(false);
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage]);

  return { posts, isPostsLoading, postsError, currentPage, totalPages, setCurrentPage };
}

export default useFetchPosts;
