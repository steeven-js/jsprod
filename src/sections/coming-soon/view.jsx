import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useCountdownDate } from 'src/hooks/use-countdown';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  const countdown = useCountdownDate(new Date('2025-08-20 20:30'));

  const renderSocials = (
    <Box display="flex" sx={{ mx: 'auto' }}>
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
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Box
        component="img"
        alt="Coming soon"
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-comingsoon.svg`}
        sx={{
          my: 3,
          mx: 'auto',
          width: 320,
          maxWidth: 1,
          height: 'auto',
        }}
      />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="days" value={countdown.days} />
        <TimeBlock label="hours" value={countdown.hours} />
        <TimeBlock label="minutes" value={countdown.minutes} />
        <TimeBlock label="seconds" value={countdown.seconds} />
      </Stack>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large" color="inherit" sx={{ mr: -1.25 }}>
                Notify
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ my: 5 }}
      />

      {renderSocials}
    </>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
