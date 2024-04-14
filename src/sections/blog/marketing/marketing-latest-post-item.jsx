import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function MarketingLatestPostItem({ post, postCoverUrls }) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image
          src={
            postCoverUrls[post.id] ? postCoverUrls[post.id] : '/assets/images/marketing/marketing_1.jpg'
          }
          alt={post.title}
          ratio="3/4"
          overlay={`linear-gradient(to top, ${alpha(theme.palette.common.black, 0)} 0%, ${theme.palette.common.black
            } 75%)`}
        />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            createdAt={fDate(post.created_at)}
            duration={post.duration}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />

          <Link
            component={RouterLink}
            to={`/marketing/post/${post.id}`}
            variant="h4"
            color="inherit"
            underline="none"
          >
            {post.title}
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingLatestPostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    created_at: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
  postCoverUrls: PropTypes.array,
};
