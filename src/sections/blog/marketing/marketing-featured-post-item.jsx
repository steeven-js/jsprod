import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function MarketingFeaturedPostItem({ post }) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={
        post.media && post.media.length > 0
          ? post.media[0].original_url : '/assets/images/marketing/marketing_post_hero.jpg'
      } alt={post.title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock createdAt={fDate(post.created_at)} duration={post.duration} />

          <Link
            component={RouterLink}
            key={post.id}
            to={`/marketing/post/${post.id}`}
            color="inherit"
            variant="h3"
          >
            {post.title}
          </Link>

          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            {post.description}
          </TextMaxLine>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={
            post.author.media && post.author.media.length > 0
              ? post.author.media[0].original_url : "/assets/images/avatar/avatar_10.jpg"}
            sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingFeaturedPostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.number,
    description: PropTypes.string,
    created_at: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
      media: PropTypes.array,
    }),
    media: PropTypes.array,
  }),
};
