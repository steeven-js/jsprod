import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';
import { _About, _SUMMARY } from 'src/assets/data';

import { Iconify } from 'src/components/iconify';
import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

// ----------------------------------------------------------------------

const IconWrap = styled('div', {
  shouldForwardProp: (prop) => prop !== 'deg' && prop !== 'color',
})(({ color, deg, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.vars.palette[color].darker,
  border: `dashed 2px ${varAlpha(theme.vars.palette[color].mainChannel, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from ${deg}deg at 50% 50%, ${theme.vars.palette[color].main} 0deg, ${theme.vars.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export function About({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        pt: { xs: 3, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              alt="About teams illustration"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-teams.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">{_About[0].label}</Typography>

            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              {_About[1].label}
              <br />
              <br />
              {_About[2].label}
            </Typography>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {_About[3].label}
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            textAlign: 'center',
            display: 'grid',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {_SUMMARY.map((value, index) => (
            <div key={value.title}>
              <IconWrap
                color={COLORS[index]}
                deg={
                  (index === 1 && 45 * 2) || (index === 2 && 45 * 4) || (index === 3 && 45 * 6) || 0
                }
              >
                <Iconify icon={value.icon} width={48} />
              </IconWrap>

              <AnimateCountUp variant="h2" to={value.total} sx={{ mt: 2, mb: 1 }} />

              <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
