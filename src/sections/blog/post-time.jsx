import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export function PostTime({ createdAt, duration, sx, ...other }) {
  return (
    <Box
      flexWrap="wrap"
      display="flex"
      alignItems="center"
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      {...other}
    >
      {createdAt}

      {duration && (
        <>
          <Box
            component="span"
            sx={{
              mx: 1,
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'currentColor',
            }}
          />

          {duration}
        </>
      )}
    </Box>
  );
}
