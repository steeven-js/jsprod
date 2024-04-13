import { useState, useEffect, useCallback } from "react";

import { fDate } from "src/utils/format-time";

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

  const endpoint = `http://127.0.0.1:8000/api/posts/${id}`;

  const fetchData = useCallback(async () => {
    setIsPostLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setPost(result);

      // Author name
      setAuthorName(result.author.name);

      // Author avatar
      const avatarUrlPromise = result.author.media && result.author.media.length > 0
        ? result.author.media[0].original_url
        : '/assets/images/avatar/avatar_1.jpg';

      // Attendre à la fois la réponse du fetch et l'URL de l'avatar de l'auteur
      const [avatarUrl] = await Promise.all([avatarUrlPromise]);

      // Définir l'URL de l'avatar de l'auteur
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
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { post,
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
