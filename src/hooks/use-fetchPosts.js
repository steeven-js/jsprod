import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/endpoint";
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
      const endpoint = `${apiUrl}/posts?page=${currentPage}`;

      const response = await axios.get(endpoint);
      const result = response.data;

      setPosts(result.data);

      // Update total number of pages
      setTotalPages(result.last_page);

      // Update global state
      dispatch(_setPosts(result.data));

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

    } catch (error) {
      setPostsError(error.message);
      console.error(error);
    } finally {
      setIsPostsLoading(false);
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    posts,
    isPostsLoading,
    postsError,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}

export default useFetchPosts;
