import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { useBoolean } from 'src/hooks/use-boolean';

import { bgBlur, varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgBlur({ color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8) }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  height: 'var(--layout-header-mobile-height)',
  [theme.breakpoints.up('md')]: {
    height: 'var(--layout-header-desktop-height)',
  },
}));

// ----------------------------------------------------------------------

export function Searchbar({ sx }) {
  const openSearch = useBoolean();

  return (
    <div>
      <ClickAwayListener onClickAway={openSearch.onFalse}>
        <div>
          <IconButton color="inherit" aria-label="search" onClick={openSearch.onTrue} sx={sx}>
            <SvgIcon viewBox="0 0 32 32" sx={{ width: 22, height: 22 }}>
              <path
                fill="currentColor"
                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
              />
            </SvgIcon>
          </IconButton>

          <Slide direction="down" in={openSearch.value} mountOnEnter unmountOnExit>
            <StyledRoot>
              <InputBase
                autoFocus
                fullWidth
                placeholder="Search…"
                startAdornment={
                  <InputAdornment position="start">
                    <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
                }
                inputProps={{ id: 'search-input' }}
                sx={{
                  [`& .${inputBaseClasses.input}`]: {
                    fontWeight: 'fontWeightSemiBold',
                  },
                }}
              />
              <Button variant="contained" onClick={openSearch.onFalse}>
                Search
              </Button>
            </StyledRoot>
          </Slide>
        </div>
      </ClickAwayListener>
    </div>
  );
}
