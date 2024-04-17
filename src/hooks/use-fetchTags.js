import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/fetch";


const useFetchTags = () => {
  const [tags, setTags] = useState([]);
  const [isTagsLoading, setIsTagsLoading] = useState(false);
  const [tagsError, setTagsError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsTagsLoading(true);

    try {
      const endpoint = `${apiUrl}/tags`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();

      // Tags
      setTags(result.map(tag => tag.name.fr));

    } catch (error) {
      setTagsError(error.message);
      console.error(error);
    } finally {
      setIsTagsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tags,
    isTagsLoading,
    tagsError,
  };
}

export default useFetchTags;
