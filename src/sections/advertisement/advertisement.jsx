import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function Advertisement({ sx, title, action, imageUrl, description, ...other }) {
  return (
    <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', ...sx }} {...other}>
      <Stack
        alignItems="center"
        sx={{
          p: 5,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
        }}
      >
        <Typography component="h6" variant="h5" sx={{ color: 'primary.main' }}>
          {title}
        </Typography>

        {description && (
          <Typography variant="body2" sx={{ mt: 1, mb: 3, color: 'common.white' }}>
            {description}
          </Typography>
        )}

        {action}
      </Stack>

      <Image
        alt="Advertisement"
        src={imageUrl}
        ratio="1/1"
        slotProps={{
          overlay: {
            backgroundImage: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${
                theme.vars.palette.common.black
              })`,
          },
        }}
      />
    </Box>
  );
}
