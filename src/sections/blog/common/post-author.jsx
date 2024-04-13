import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export const socials = [
  {
    value: 'github',
    label: 'GitHub',
    icon: 'carbon:logo-github',
    color: '#181717',
    bg: '#FFFFFF',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
];

export default function PostAuthor({authorName, authorAvatar, authorBio, authorSince, authorRole }) {

  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar src={authorAvatar} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{authorName}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {authorRole}
            </Typography>
          </Stack>

          <Stack direction="row">
            {socials.map((social) => (
              <IconButton key={social.value}>
                <Iconify icon={social.icon} sx={{ color: social.color, backgroundColor: social.bg }} />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {authorBio}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {'Auteur depuis le'}{' '}{authorSince}
        </Typography>
      </Stack>
    </Stack>
  );
}

PostAuthor.propTypes = {
  authorName: PropTypes.string,
  authorAvatar: PropTypes.string,
  authorBio: PropTypes.string,
  authorSince: PropTypes.string,
  authorRole: PropTypes.string,
};
