import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";

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
      const endpoint = `http://127.0.0.1:8000/api/posts?page=${currentPage}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();

      setPosts(result.data);

      // Récupérer les URLs des images des posts
      const coverUrlsPromises = result.data.map(post =>
        post.media && post.media.length > 0 ? post.media[0].original_url : '/assets/images/marketing/marketing_1.jpg'
      );

      // Attendre à la fois la réponse du fetch et les URLs des images des posts
      const _postCoverUrls = await Promise.all(coverUrlsPromises);

      // Définir les URLs des images des posts
      setPostCoverUrls(_postCoverUrls);

      // Mettre à jour le nombre total de pages
      setTotalPages(result.last_page);

      // Mettre à jour le state global
      dispatch(_setPosts(result.data));

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

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
