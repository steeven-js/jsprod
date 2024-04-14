import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import MarketingCaseStudyItem from './marketing-case-study-item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({ studies, categories }) {

  const [tab, setTab] = useState('Tous');

  const getCategories = categories.map((category) => category.name);

  const _categories = ['Tous', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(studies, tab);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

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
        {filtered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      {/* <Pagination
        count={10}
        color="primary"
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      /> */}
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
