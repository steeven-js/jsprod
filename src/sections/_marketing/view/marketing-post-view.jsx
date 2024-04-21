import remarkGfm from 'remark-gfm'
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'
import { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import BlogMarketingLatestPosts from 'src/sections/blog/marketing/marketing-latest-posts';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import PostSocialsShare from '../../blog/common/post-socials-share';

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
  },
];

export default function MarketingPostView({ post, authorName, authorAvatar, authorBio, authorSince, tags, authorRole, posts }) {

  const [favorite, setFavorite] = useState();

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Image alt="hero"
        src={
          post.media ? post.media[0].original_url : "/assets/images/marketing/marketing_post_hero.jpg"
        }
        ratio="21/9"
      />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.marketing.posts },
            { name: post.title ?? '...' },
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {post.duration ?? ''} {post.duration > 1 ? 'minutes' : 'minute'}
              </Typography>

              <Typography variant="h2" component="h1">
                {post.title ?? '...'}
              </Typography>
              <Typography variant="h5">{post.description ?? '...'}</Typography>
            </Stack>

            <Divider />
            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Avatar src={authorAvatar} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{authorName}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(post.created_at, 'dd/MM/yyyy p') ?? '...'}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite === 'true'} // Utiliser une chaîne pour la propriété checked
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  // eslint-disable-next-line react/prop-types, no-unused-vars
                  const { children, className, node, ...rest } = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={dracula}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            />

            {tags.length > 0 && <PostTags tags={tags} />}

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor
              authorName={authorName}
              authorAvatar={authorAvatar}
              authorBio={authorBio}
              authorSince={authorSince}
              authorRole={authorRole}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {posts.length > 4 ? <BlogMarketingLatestPosts posts={posts.slice(0, 4)} /> : null}

      {/* <MarketingLandingFreeSEO />

      <MarketingNewsletter /> */}

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

// ----------------------------------------------------------------------

MarketingPostView.propTypes = {
  post: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  authorBio: PropTypes.string.isRequired,
  authorSince: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  authorRole: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};
