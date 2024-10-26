import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { MarketingCaseStudyItem } from './marketing-case-study-item';

// ----------------------------------------------------------------------

export function MarketingCaseStudyList({ caseStudies, sx, ...other }) {
  const [currentTab, setCurrentTab] = useState('All');

  const getCategories = caseStudies.map((project) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const dataFiltered = applyFilter({ inputData: caseStudies, query: currentTab });

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
          <Tab key={category} value={category} label={category} />
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
        {dataFiltered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
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

function applyFilter({ inputData, query }) {
  if (query !== 'All') {
    inputData = inputData.filter((project) => project.category === query);
  }

  return inputData;
}
