// marketing-case-study-list.jsx
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { MarketingCaseStudyItem } from './marketing-case-study-item';

// ----------------------------------------------------------------------

export function MarketingCaseStudyList({ projetsCategories, posts, sx, ...other }) {
  const [currentTab, setCurrentTab] = useState('all');

  // Créer un tableau de catégories avec "All" en première position
  const categories = [{ id: 'all', name: 'All' }, ...projetsCategories];

  // Modifier la fonction de filtrage pour utiliser les posts et les metaKeywords
  const dataFiltered = applyFilter({
    inputData: posts,
    currentTab,
    categories,
  });

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category.id} value={category.id} label={category.name} />
        ))}
      </Tabs>

      <Box
        gap={4}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ pt: 5, pb: 10, ...sx }}
        {...other}
      >
        {dataFiltered.map((post) => (
          <MarketingCaseStudyItem key={post.id} project={post} categories={categories} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}

function applyFilter({ inputData, currentTab, categories }) {
  if (!inputData) return [];

  if (currentTab === 'all') {
    return inputData;
  }

  const selectedCategory = categories.find((cat) => cat.id === currentTab);
  if (!selectedCategory) return inputData;

  return inputData.filter(
    (post) => post.metaKeywords && post.metaKeywords.includes(selectedCategory.name)
  );
}
