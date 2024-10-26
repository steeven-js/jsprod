import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { fDate } from 'src/utils/format-time';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';

import { PostTime } from './post-time';

// ----------------------------------------------------------------------

export function PostItemMobile({ post, onSiderbar, sx, ...other }) {
  return (
    <Box
      gap={2}
      display="flex"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1, ...sx }}
      {...other}
    >
      <Image
        alt={post.title}
        src={post.coverUrl}
        sx={{ width: 64, height: 64, flexShrink: 0, borderRadius: 1.5 }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link
          color="inherit"
          variant={onSiderbar ? 'subtitle2' : 'subtitle1'}
          sx={(theme) => ({
            ...maxLine({
              line: 2,
              persistent: onSiderbar ? theme.typography.subtitle2 : theme.typography.subtitle1,
            }),
          })}
        >
          {post.title}
        </Link>

        <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} />
      </Stack>
    </Box>
  );
}
