import { useState, useEffect, useCallback } from "react";

const useFetchStudiesCategories = () => {
  const [studiesCategories, setStudiesCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isStudiesCategoriesLoading, setIsStudiesCategoriesLoading] = useState(false);
  const [studiesErrorCategories, setStudiesCategoriesError] = useState(null);
  const [studyCoverUrls, setStudyCoverUrls] = useState([]);

  const fetchData = useCallback(async () => {
    setIsStudiesCategoriesLoading(true);

    try {
      const endpoint = `http://127.0.0.1:8000/api/categories?page=${currentPage}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas valide');
      }
      const result = await response.json();

      setStudiesCategories(result.data);

      // Récupérer les URLs des images des posts
      const coverUrlsPromises = result.data.map(study =>
        study.media && study.media.length > 0 ? study.media[0].original_url : '/assets/images/marketing/marketing_1.jpg'
      );

      // Attendre à la fois la réponse du fetch et les URLs des images des posts
      const _studyCoverUrls = await Promise.all(coverUrlsPromises);

      // Définir les URLs des images des posts
      setStudyCoverUrls(_studyCoverUrls);

      // Mettre à jour le nombre total de pages
      setTotalPages(result.last_page);

      // Tags
      // setTags(result.tags.map(tag => tag.name.fr));

    } catch (error) {
      setStudiesCategoriesError(error.message);
      console.error(error);
    } finally {
      setIsStudiesCategoriesLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage]);

  return {
    studiesCategories,
    isStudiesCategoriesLoading,
    studiesErrorCategories,
    currentPage,
    totalPages,
    setCurrentPage,
    studyCoverUrls
  };
}

export default useFetchStudiesCategories;
