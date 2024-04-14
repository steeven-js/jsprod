import { useState, useEffect, useCallback } from "react";

const useFetchStudy = (id) => {
  const [study, setStudy] = useState({});
  const [isStudyLoading, setIsStudyLoading] = useState(false);
  const [studyError, setStudyError] = useState(null);
  const [studyCoverUrls, setStudyCoverUrls] = useState('');

  const fetchData = useCallback(async () => {
    setIsStudyLoading(true);

    try {
      const endpoint = `http://127.0.0.1:8000/api/studies/${id}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();

      setStudy(result);

      // Récupérer les URLs des images des posts
      const _studyCoverUrls = result.media && result.media.length > 0
        ? result.media[0].original_url
        : '/assets/images/marketing/marketing_6.jpg'; // Utilisation de la variable 'result' plutôt que 'study'

      // Définir les URLs des images des posts
      setStudyCoverUrls(_studyCoverUrls);

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

    } catch (error) {
      setStudyError(error.message);
      console.error(error);
    } finally {
      setIsStudyLoading(false);
    }
  }, [id]); // Correction de la dépendance

  useEffect(() => {
    fetchData();
  }, [fetchData, id]); // Utilisation de 'id' comme dépendance supplémentaire

  return {
    study,
    isStudyLoading,
    studyError,
    studyCoverUrls
  };
}

export default useFetchStudy;
