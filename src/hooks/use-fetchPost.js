import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { fDate } from "src/utils/format-time";

import { apiUrl } from "src/assets/data/endpoint";

const useFetchPost = (id) => {
  const [post, setPost] = useState([]);
  const [authorName, setAuthorName] = useState(null);
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [authorRole, setAuthorRole] = useState(null);
  const [authorBio, setAuthorBio] = useState(null);
  const [authorSince, setAuthorSince] = useState(null);
  const [tags, setTags] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsPostLoading(true);

    try {
      const endpoint = `${apiUrl}/posts/${id}`;
      const response = await axios.get(endpoint);
      const result = response.data;
      setPost(result);

      // Author name
      setAuthorName(result.author.name);

      // Author avatar
      const avatarUrlPromise = result.author.media && result.author.media.length > 0
        ? result.author.media[0].original_url
        : '/assets/images/avatar/avatar_1.jpg';

      // Wait for both fetch response and author's avatar URL
      const [avatarUrl] = await Promise.all([avatarUrlPromise]);

      // Set author's avatar URL
      setAuthorAvatar(avatarUrl);

      // Author role
      setAuthorRole(result.author.role);

      // Bio
      setAuthorBio(result.author.bio);

      // Author since
      setAuthorSince(fDate(result.author.created_at));

      // Tags
      setTags(result.tags.map(tag => tag.name.fr));

      // console.log(tags);

    } catch (error) {
      setPostError(error);
      console.error(error);
    } finally {
      setIsPostLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    post,
    authorName,
    authorAvatar,
    authorBio,
    authorSince,
    tags,
    isPostLoading,
    postError,
    authorRole
  };
};

export default useFetchPost;
