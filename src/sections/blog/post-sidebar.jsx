import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

import { PostItemMobile } from './post-item-mobile';

// ----------------------------------------------------------------------

export function PostSidebar({
  sx,
  tags,
  slots,
  author,
  slotProps,
  categories,
  recentPosts,
  ...other
}) {
  const renderAuthor = author && (
    <Box
      sx={{
        gap: 2,
        mb: { md: 5 },
        display: { xs: 'none', md: 'flex' },
        ...slotProps?.author,
      }}
    >
      <Avatar src={author.avatarUrl} sx={{ width: 64, height: 64 }} />
      <div>
        <Typography component="span" variant="h6">
          {author.name}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{ mb: 1, mt: 0.5, display: 'block', color: 'text.secondary' }}
        >
          {author.role}
        </Typography>

        <Box display="flex">
          {_socials.map((social) => (
            <IconButton key={social.value} color="inherit">
              {(social.value === 'twitter' && (
                <SvgColor
                  width={20}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                />
              )) || (
                <Box
                  component="img"
                  alt={social.label}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                  sx={{ width: 20, height: 20 }}
                />
              )}
            </IconButton>
          ))}
        </Box>
      </div>
    </Box>
  );

  const renderCategories = !!categories?.length && (
    <Stack spacing={1} sx={slotProps?.categories}>
      <Typography variant="h5">Categories</Typography>

      {categories.map((category) => (
        <Box key={category.label} gap={2} display="flex" alignItems="center">
          <Box
            component="span"
            sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }}
          />

          <Link variant="body2" href={category.path} color="inherit">
            {category.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );

  const renderRecentPosts = !!recentPosts?.length && (
    <Stack spacing={2} sx={slotProps?.recentPosts}>
      <Typography variant="h5">Recent posts</Typography>

      {recentPosts.map((post) => (
        <PostItemMobile key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );

  const renderPopularTags = !!tags?.length && (
    <Stack spacing={2} sx={slotProps?.tags}>
      <Typography variant="h5">Popular tags</Typography>

      <Box gap={1} display="flex" flexWrap="wrap">
        {tags.map((tag) => (
          <Chip key={tag} label={tag} variant="soft" size="small" onClick={() => {}} />
        ))}
      </Box>
    </Stack>
  );

  return (
    <>
      {slots?.topNode}

      {renderAuthor}

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        sx={{ display: { xs: 'none', md: 'inline-flex' } }}
      />

      <Box
        gap={5}
        display="flex"
        flexDirection="column"
        sx={{
          pt: { md: 5 },
          pb: { xs: 10, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {renderCategories}

        {renderRecentPosts}

        {renderPopularTags}

        {slots?.bottomNode}
      </Box>
    </>
  );
}
