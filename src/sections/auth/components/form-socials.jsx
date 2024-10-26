import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function FormSocials({ sx, signInWithGoogle, singInWithGithub, signInWithTwitter }) {
  return (
    <Box gap={1.5} display="flex" justifyContent="center" sx={sx}>
      <IconButton color="inherit" onClick={signInWithGoogle}>
        <Box
          component="img"
          alt="Google"
          src="/assets/icons/socials/ic-google.svg"
          sx={{ width: 20, height: 20 }}
        />
      </IconButton>

      <IconButton color="inherit" onClick={singInWithGithub}>
        <SvgColor width={20} src="/assets/icons/socials/ic-github.svg" />
      </IconButton>

      <IconButton color="inherit" onClick={signInWithTwitter}>
        <SvgColor width={20} src="/assets/icons/socials/ic-twitter.svg" />
      </IconButton>
    </Box>
  );
}
