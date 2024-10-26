import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';
import { _TIMELINES, _ServicesHowItWork } from 'src/assets/data';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

// ----------------------------------------------------------------------

export default function ServicesHowItWork({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {_ServicesHowItWork[0].label}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          {_ServicesHowItWork[1].label}
        </Typography>

        <Timeline position="alternate">
          {_TIMELINES.map((value, index) => (
            <TimelineItem key={value.title}>
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  STEP {index + 1}
                </Typography>

                <Typography variant="h5" component="h6" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && { ml: 'auto' }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
