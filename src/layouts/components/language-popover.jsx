import { useState, useCallback } from 'react';

import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { usePopover } from 'src/hooks/use-popover';

import { FlagIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function LanguagePopover({ data = [], sx, ...other }) {
  const openLangs = usePopover();

  const [locale, setLocale] = useState(data[0].value);

  const currentLang = data.find((lang) => lang.value === locale);

  const handleChangeLang = useCallback(
    (newLang) => {
      setLocale(newLang);
      openLangs.onClose();
    },
    [openLangs]
  );

  return (
    <>
      <IconButton
        onClick={openLangs.onOpen}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(openLangs.open && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <FlagIcon code={currentLang?.countryCode} />
      </IconButton>

      <Popover
        open={openLangs.open}
        anchorEl={openLangs.anchorEl}
        onClose={openLangs.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuList sx={{ width: 160, minHeight: 72 }}>
          {data?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang?.value}
              onClick={() => handleChangeLang(option.value)}
              sx={{ gap: 2 }}
            >
              <FlagIcon code={option.countryCode} />
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
