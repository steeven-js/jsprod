import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/endpoint";

const useFetchStudies = () => {
  const [studies, setStudies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isStudiesLoading, setIsStudiesLoading] = useState(false);
  const [studiesError, setStudiesError] = useState(null);
  const [studyCoverUrls, setStudyCoverUrls] = useState([]);

  const fetchData = useCallback(async () => {
    setIsStudiesLoading(true);

    try {
      const endpoint = `${apiUrl}/studies`;
      const response = await axios.get(endpoint);
      const result = response.data;

      setStudies(result.studies);
      setCategories(result.categories);

      // Retrieve study cover image URLs
      const coverUrlsPromises = result.studies.map(study =>
        study.media && study.media.length > 0 ? study.media[0].original_url : '/assets/images/marketing/marketing_6.jpg'
      );

      // Wait for both fetch response and study cover image URLs
      const _studyCoverUrls = await Promise.all(coverUrlsPromises);

      // Set study cover image URLs
      setStudyCoverUrls(_studyCoverUrls);

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

    } catch (error) {
      setStudiesError(error.message);
      console.error(error);
    } finally {
      setIsStudiesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    studies,
    categories,
    isStudiesLoading,
    studiesError,
    studyCoverUrls
  };
}

export default useFetchStudies;
