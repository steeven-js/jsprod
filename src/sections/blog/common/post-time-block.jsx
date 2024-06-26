import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export default function PostTimeBlock({ createdAt, duration, sx, ...other }) {
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{ typography: 'caption', color: 'text.disabled', ...sx }}
      {...other}
    >
      {fDate(createdAt)}

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

          {duration} {duration > 1 ? 'minutes' : 'minute'}
        </>
      )}
    </Stack>
  );
}

PostTimeBlock.propTypes = {
  createdAt: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Accepte les types number et string
  sx: PropTypes.object,
};

