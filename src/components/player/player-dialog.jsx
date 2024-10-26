import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from '../iconify';
import { StyledReactPlayer } from './styles';

// ----------------------------------------------------------------------

export function PlayerDialog({ videoPath, open, onClose, ...other }) {
  const loading = useBoolean(true);

  return (
    <Dialog
      fullScreen
      open={open}
      PaperProps={{
        sx: { bgcolor: 'unset' },
      }}
    >
      <IconButton
        size="large"
        onClick={onClose}
        sx={{
          top: 24,
          right: 24,
          zIndex: 9,
          position: 'fixed',
          color: (theme) => varAlpha(theme.vars.palette.common.whiteChannel, 0.72),
          bgcolor: (theme) => varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
          '&:hover': {
            bgcolor: (theme) => varAlpha(theme.vars.palette.common.whiteChannel, 0.16),
          },
        }}
      >
        <Iconify icon="eva:close-outline" />
      </IconButton>

      {loading.value && (
        <CircularProgress
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            position: 'absolute',
          }}
        />
      )}

      <StyledReactPlayer
        url={videoPath}
        playing={!loading.value}
        onReady={loading.onFalse}
        {...other}
      />
    </Dialog>
  );
}
