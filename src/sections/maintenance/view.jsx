import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export function MaintenanceView() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Website currently under maintenance
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Box
          component="img"
          alt="Maintenance"
          src={`${CONFIG.assetsDir}/assets/illustrations/illustration-maintenance.svg`}
          sx={{
            mx: 'auto',
            width: 320,
            maxWidth: 1,
            height: 'auto',
            my: { xs: 5, sm: 10 },
          }}
        />
      </m.div>

      <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
        Go to home
      </Button>
    </MotionContainer>
  );
}
