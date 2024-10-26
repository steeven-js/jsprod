import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const IconContent = styled('span')(({ theme }) => ({
  width: 56,
  height: 56,
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: `inset 0px -4px 6px rgba(0, 0, 0, 0.48)`,
  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)',
}));

const TriangleTop = styled('span')({
  top: -2,
  left: -2,
  width: 16,
  zIndex: 9,
  height: 16,
  borderRadius: '5px',
  position: 'absolute',
  backgroundColor: 'inherit',
  '&:before': {
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    content: '" "',
    borderRadius: '5px',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});

const TriangleBottom = styled('span')(({ theme }) => ({
  top: 2,
  left: -10,
  width: 18,
  zIndex: 8,
  height: 18,
  opacity: 0.24,
  position: 'absolute',
  transform: 'rotate(45deg)',
  backgroundColor: theme.vars.palette.common.black,
}));

// ----------------------------------------------------------------------

export function FloatIcon({ icon, color, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        p: 1.5,
        borderRadius: 2.5,
        backgroundImage: `linear-gradient(to bottom, ${varAlpha(color, 0.24)} -12%, ${varAlpha(color, 0)} 88%)`,
        ...sx,
      }}
      {...other}
    >
      <IconContent sx={{ bgcolor: varAlpha(color, 1) }}>
        <TriangleTop />
        <TriangleBottom />
        {icon}
      </IconContent>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatLabel({ icon, text, sx, ...other }) {
  return (
    <Box
      component={m.div}
      gap={1.5}
      display="flex"
      alignItems="center"
      sx={{
        px: 2,
        py: 1.25,
        fontSize: 15,
        borderRadius: 2,
        letterSpacing: -0.5,
        color: 'common.black',
        bgcolor: 'common.white',
        fontWeight: 'fontWeightBold',
        boxShadow: (theme) =>
          `0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.vars.palette.grey[500]}`,
        '& svg': { width: 44, height: 44 },
        ...sx,
      }}
      {...other}
    >
      {icon}
      {text}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatCircle({ sx, children, isHidden = false, ...other }) {
  return (
    <Box component={m.div} sx={{ width: 460, height: 460, position: 'absolute', ...sx }} {...other}>
      {!isHidden && (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 520 520">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeDasharray="3"
            strokeWidth="1"
            opacity="0.24"
          >
            <g stroke="#919EAB" strokeWidth="2" transform="translate(-757 1.852)">
              <path d="M1017 518c143.042 0 259-115.958 259-259S1160.042 0 1017 0 758 115.958 758 259s115.958 259 259 259z" />
            </g>
          </g>
        </svg>
      )}
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatDot({ size = 24, color = 'primary', sx }) {
  return (
    <Box
      sx={{
        zIndex: 10,
        width: size,
        height: size,
        borderRadius: '50%',
        position: 'absolute',
        backgroundImage: (theme) =>
          `linear-gradient(to bottom, ${theme.vars.palette[color].light}, ${theme.vars.palette[color].main})`,
        boxShadow: (theme) => `inset 0px -2px 4px ${theme.vars.palette[color].darker}`,
        ...sx,
      }}
    />
  );
}
