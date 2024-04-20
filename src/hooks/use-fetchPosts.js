import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/fetch";
import { _setPosts } from "src/redux/reducer/posts";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);
  const [postCoverUrls, setPostCoverUrls] = useState([]);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    setIsPostsLoading(true);

    try {
      const endpoint = `${apiUrl}/posts?page=${currentPage}`;

      const response = await axios.get(endpoint);
      const result = response.data;

      setPosts(result.data);

      // Retrieve post cover image URLs
      const coverUrlsPromises = result.data.map(post =>
        post.media && post.media.length > 0 ? post.media[0].original_url : '/assets/images/marketing/marketing_1.jpg'
      );

      // Wait for both fetch response and post cover image URLs
      const _postCoverUrls = await Promise.all(coverUrlsPromises);

      // Set post cover image URLs
      setPostCoverUrls(_postCoverUrls);

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
  }, [fetchData, currentPage]);

  return {
    posts,
    isPostsLoading,
    postsError,
    currentPage,
    totalPages,
    setCurrentPage,
    postCoverUrls
  };
}

export default useFetchPosts;
