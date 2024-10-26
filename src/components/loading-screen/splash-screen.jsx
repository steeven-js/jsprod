import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';

import { Logo } from '../logo';

// ----------------------------------------------------------------------

export function SplashScreen({ portal = true, sx, ...other }) {
  const content = (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          right: 0,
          width: 1,
          bottom: 0,
          height: 1,
          zIndex: 9998,
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          ...sx,
        }}
        {...other}
      >
        <m.div
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            repeatDelay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Logo isSingle sx={{ width: 128, height: 128 }} />
        </m.div>
      </Box>
    </Box>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
}
