import { useState, useEffect, useCallback } from "react";

const useFetchStudies = () => {
  const [studies, setStudies] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [isStudiesLoading, setIsStudiesLoading] = useState(false);
  const [studiesError, setStudiesError] = useState(null);
  const [studyCoverUrls, setStudyCoverUrls] = useState([]);

  const fetchData = useCallback(async () => {
    setIsStudiesLoading(true);

    try {
      const endpoint = `http://127.0.0.1:8000/api/studies`;
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

      // Tableau des categories de façon unique si l'id et le nom sont identiques

      // Mettre à jour le nombre total de pages
      // setTotalPages(result.last_page);

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
    // currentPage,
    // totalPages,
    // setCurrentPage,
    studyCoverUrls
  };
}

export default useFetchStudies;
