import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from './post-time-block';


// ----------------------------------------------------------------------

export default function PostItemMobile({ post, onSiderbar }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={post.title}
        src={
          post.media && post.media.length > 0
            ? post.media[0].original_url : '/assets/images/marketing/marketing_4.jpg'
        }
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link
          component={RouterLink}
          color="inherit"
          key={post.id}
          to={`${paths.marketing.post}/${post.id}`}
        >
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{post.title}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={post.created_at} duration={post.duration} />
      </Stack>
    </Stack>
  );
}

PostItemMobile.propTypes = {
  onSiderbar: PropTypes.bool,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.number,
    created_at: PropTypes.string,
    media: PropTypes.array,
  }),
};
