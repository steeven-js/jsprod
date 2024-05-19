import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/endpoint";

const useFetchTags = () => {
  const [tags, setTags] = useState([]);
  const [isTagsLoading, setIsTagsLoading] = useState(false);
  const [tagsError, setTagsError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsTagsLoading(true);

    try {
      const endpoint = `${apiUrl}/tags`;
      const response = await axios.get(endpoint);
      const result = response.data;

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
