import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/fetch";

const useFetchStudy = (id) => {
  const [study, setStudy] = useState({});
  const [isStudyLoading, setIsStudyLoading] = useState(false);
  const [studyError, setStudyError] = useState(null);
  const [studyCoverUrls, setStudyCoverUrls] = useState('');

  const fetchData = useCallback(async () => {
    setIsStudyLoading(true);

    try {
      const endpoint = `${apiUrl}/studies/${id}`;
      const response = await axios.get(endpoint);
      const result = response.data;

      setStudy(result);

      // Retrieve study cover image URL
      const _studyCoverUrls = result.media && result.media.length > 0
        ? result.media[0].original_url
        : '/assets/images/marketing/marketing_6.jpg';

      // Set study cover image URL
      setStudyCoverUrls(_studyCoverUrls);

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

    } catch (error) {
      setStudyError(error.message);
      console.error(error);
    } finally {
      setIsStudyLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, id]);

  return {
    study,
    isStudyLoading,
    studyError,
    studyCoverUrls
  };
}

export default useFetchStudy;
