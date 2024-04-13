import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import useFetchPosts from 'src/hooks/use-fetchPosts';

import MarketingPostItem from './marketing-post-item';

export default function MarketingPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, totalPages, setCurrentPage: setFetchPage } = useFetchPosts(currentPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Utilisez useEffect pour effectuer l'appel de l'API lorsque currentPage change
  useEffect(() => {
    setFetchPage(currentPage); // Mettez à jour la page à récupérer dans le hook useFetchPosts
  }, [currentPage, setFetchPage]);

  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.map((post) => (
          <MarketingPostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

MarketingPosts.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
  }),
};
