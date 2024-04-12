import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function MarketingPostItem({ post }) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image
          src={
            post.media && post.media.length > 0
              ? post.media[0].original_url : '/assets/images/marketing/marketing_6.jpg'
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
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            duration={post.duration}
            createdAt={fDate(post.created_at)}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />

          <Link component={RouterLink} to={`/marketing/post/${post.id}`} sx={{ color: 'common.white' }}>
            <TextMaxLine variant="h4">{post.title}</TextMaxLine>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={
            post.author.media && post.author.media.length > 0
              ? post.author.media[0].original_url : "/assets/images/avatar/avatar_10.jpg"
          } sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingPostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    created_at: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
      media: PropTypes.array,
    }),
    media: PropTypes.array,
  }),
};
