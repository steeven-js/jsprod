import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonBase, { buttonBaseClasses } from '@mui/material/ButtonBase';

import { RouterLink } from 'src/routes/components';
import { usePathname, useActiveLink } from 'src/routes/hooks';

import { usePopover } from 'src/hooks/use-popover';

import { _mock } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function NavAccountDesktop({ data, sx }) {
  return (
    <Stack
      sx={{
        width: 280,
        flexShrink: 0,
        borderRadius: 2,
        display: { xs: 'none', md: 'flex' },
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        ...sx,
      }}
    >
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        <UserPhoto />
        <div>
          <Typography variant="subtitle1" noWrap sx={{ mb: 0.5 }}>
            Jayvion
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            nannie.abernathy70@yahoo.com
          </Typography>
        </div>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box component="nav" sx={{ my: 1, px: 3 }}>
        <Box component="ul">
          {data.map((item) => (
            <Box component="li" key={item.title} sx={{ display: 'flex' }}>
              <NavItem title={item.title} path={item.path} icon={item.icon} />
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ py: 1.5, px: 3 }}>
        <NavItem
          title="Logout"
          icon={<Iconify icon="carbon:logout" />}
          onClick={() => console.log('Logout')}
        />
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function NavAccountPopover({ data, sx }) {
  const openMenu = usePopover();

  const pathname = usePathname();

  useEffect(() => {
    if (openMenu.open) {
      openMenu.onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton
        disableRipple
        color={openMenu.open ? 'primary' : 'inherit'}
        onClick={openMenu.onOpen}
      >
        <Iconify width={22} icon="solar:user-rounded-outline" />
      </IconButton>

      <Popover
        open={openMenu.open}
        anchorEl={openMenu.anchorEl}
        onClose={openMenu.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              width: 220,
              [`& .${buttonBaseClasses.root}`]: {
                px: 1.5,
                py: 0.75,
                height: 'auto',
              },
              ...sx,
            },
          },
        }}
      >
        <Box component="nav">
          <Box component="ul" gap={0.5} display="flex" flexDirection="column">
            {data.map((item) => (
              <Box component="li" key={item.title} sx={{ display: 'flex' }}>
                <NavItem title={item.title} path={item.path} icon={item.icon} />
              </Box>
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 0.5, borderStyle: 'dashed' }} />
        <NavItem
          title="Logout"
          icon={<Iconify icon="carbon:logout" />}
          onClick={openMenu.onClose}
        />
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

export function NavItem({ title, path, icon, sx, ...other }) {
  const active = useActiveLink(path ?? '');

  const buttonProps = path
    ? {
        href: path,
        component: RouterLink,
      }
    : {};

  return (
    <ButtonBase
      disableRipple
      key={title}
      {...buttonProps}
      sx={{
        gap: 2,
        width: 1,
        height: 44,
        borderRadius: 1,
        typography: 'body2',
        justifyContent: 'flex-start',
        ...(active &&
          path && {
            color: 'primary.main',
            typography: 'subtitle2',
          }),
        ...sx,
      }}
      {...other}
    >
      {icon}
      {title}
    </ButtonBase>
  );
}

// ----------------------------------------------------------------------

export function UserPhoto({ sx, ...other }) {
  return (
    <Box gap={2} display="flex" alignItems="center" sx={sx} {...other}>
      <Avatar src={_mock.image.avatar(0)} sx={{ width: 64, height: 64 }} />
      <Box
        gap={1}
        display="flex"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          typography: 'caption',
          '&:hover': { opacity: 0.72 },
        }}
      >
        <Iconify icon="solar:pen-2-outline" />
        Change photo
      </Box>
    </Box>
  );
}
