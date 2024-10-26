import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function PostAuthor({ author, sx, ...other }) {
  const renderSocials = (
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
              loading="lazy"
              alt={social.label}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              sx={{ width: 20, height: 20 }}
            />
          )}
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Box
      display="flex"
      gap={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Avatar src={author?.avatarUrl} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{author?.name}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {author?.role}
            </Typography>
          </Stack>

          {renderSocials}
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {author?.about}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {author?.quotes}
        </Typography>
      </Stack>
    </Box>
  );
}
