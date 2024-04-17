import { useState, useEffect, useCallback } from "react";

import { apiUrl } from "src/assets/data/fetch";


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
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();

      setStudies(result.studies);
      setCategories(result.categories);

      // Récupérer les URLs des images des posts
      const coverUrlsPromises = result.studies.map(study =>
        study.media && study.media.length > 0 ? study.media[0].original_url : '/assets/images/marketing/marketing_6.jpg'
      );

      // Attendre à la fois la réponse du fetch et les URLs des images des posts
      const _studyCoverUrls = await Promise.all(coverUrlsPromises);

      // Définir les URLs des images des posts
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
