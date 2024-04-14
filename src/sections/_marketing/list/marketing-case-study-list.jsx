import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { Pagination, paginationClasses } from '@mui/material';

import MarketingCaseStudyItem from './marketing-case-study-item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({ studies, categories }) {
  const [tab, setTab] = useState('Tous'); // État pour maintenir le nom de l'onglet actuel
  const [page, setPage] = useState(1); // État pour maintenir le numéro de page actuel
  const projectsPerPage = 10; // Nombre de projets par page

  // Récupérer les noms des catégories
  const getCategories = categories.map((category) => category.name);
  const _categories = ['Tous', ...Array.from(new Set(getCategories))]; // Ajouter 'Tous' à la liste des catégories
  const filtered = applyFilter(studies, tab); // Filtrer les projets en fonction de l'onglet sélectionné

  // Fonction de changement d'onglet
  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
    setPage(1); // Réinitialiser à la première page lors du changement d'onglet
  }, []);

  // Fonction de changement de page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Calculer les indices de début et de fin des projets à afficher sur la page actuelle
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = page * projectsPerPage;

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {_categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.slice(startIndex, endIndex).map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      <Pagination
        count={Math.ceil(filtered.length / projectsPerPage)} // Calculer le nombre total de pages
        page={page}
        color="primary"
        onChange={handleChangePage}
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

MarketingCaseStudyList.propTypes = {
  studies: PropTypes.array,
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function applyFilter(arr, category) {
  if (category !== 'Tous') {
    arr = arr.filter((studies) => studies.category.name === category);
  }
  return arr;
}
