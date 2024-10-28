import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { varAlpha } from 'src/theme/styles';

import { PostTime } from './post/post-time';

// ----------------------------------------------------------------------

export function MarketingPosts({ posts, sx, ...other }) {
  const [page, setPage] = useState(1);
  const postsPerPage = 4;

  // Calculate pagination
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box
        display="grid"
        columnGap={4}
        rowGap={{ xs: 4, md: 5 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        sx={sx}
        {...other}
      >
        {currentPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      {pageCount > 1 && (
        <Pagination
          page={page}
          count={pageCount}
          onChange={handleChange}
          sx={{
            my: 10,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, sx, ...other }) {
  const transition = (theme) =>
    theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '& img': { transition },
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          content: "''",
          position: 'absolute',
          backgroundImage: (theme) =>
            `linear-gradient(to top, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
              theme.vars.palette.common.black
            } 75%)`,
        },
        '&:hover': {
          '& img': { transform: 'scale(1.06)' },
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        loading="lazy"
        alt={post?.title}
        src={post?.coverUrl}
        sx={{ aspectRatio: '3/4', objectFit: 'cover' }}
      />

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          p: 5,
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <PostTime
          createdAt={fDate(post?.createdAt)}
          duration={post?.readingTime}
          sx={{ mb: 2, color: 'inherit', opacity: 0.72 }}
        />

        <Link
          component={RouterLink}
          href={paths.posts.post(post?.id)}
          variant="h5"
          color="inherit"
          underline="none"
        >
          {post?.title}
        </Link>

        <Box flexGrow={1} />

        <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={post?.author[0].avatarUrl} />
          {post?.authorName}
        </Box>
      </Box>
    </Box>
  );
}
