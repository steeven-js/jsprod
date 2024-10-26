import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

import { pageLinks as listItems } from '../config-nav-main';

const AppStoreButton = styled((props) => (
  <Button {...props}>
    <div>
      <Box component="span" sx={{ opacity: 0.72, display: 'block', typography: 'caption' }}>
        {props.caption}
      </Box>
      <Box component="span" sx={{ mt: -0.5, typography: 'h6' }}>
        {props.title}
      </Box>
    </div>
  </Button>
))(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.vars.palette.common.white,
  border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.vars.palette.grey[900]}, ${theme.vars.palette.common.black})`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

function SectionBlock({ children, layoutQuery, sx }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          textAlign: 'left',
          alignItems: 'flex-start',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Footer({ layoutQuery, sx, ...other }) {
  const theme = useTheme();

  const pathname = usePathname();

  const renderInfo = (
    <>
      <Logo />
      <Typography variant="body2" sx={{ maxWidth: 360, color: 'text.secondary' }}>
        The starting point for your next project based on easy-to-customize Material-UI © helps you
        build apps faster and better.
      </Typography>
    </>
  );

  const renderCommunity = (
    <>
      <Typography variant="h6">Community</Typography>
      <Link variant="body2" color="inherit">
        Documentation
      </Link>
      <Link variant="body2" color="inherit">
        Changelog
      </Link>
      <Link variant="body2" color="inherit">
        Contributing
      </Link>
    </>
  );

  const renderSubscribe = (
    <>
      <div>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Let’s stay in touch
        </Typography>
        <Typography
          variant="caption"
          sx={{ maxWidth: 360, display: 'block', color: 'text.secondary' }}
        >
          Ubscribe to our newsletter to receive latest articles to your inbox weekly.
        </Typography>
      </div>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Email address"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
                Subscribe
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 420 }}
      />
    </>
  );

  const renderSocials = (
    <>
      <Typography variant="h6">Social</Typography>

      <Box display="flex">
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
    </>
  );

  const renderApps = (
    <>
      <Typography variant="h6">Apps</Typography>

      <Box gap={2} display="flex" flexWrap="wrap" justifyContent="center">
        <AppStoreButton
          startIcon={<Iconify width={28} icon="ri:apple-fill" />}
          caption="Download on the"
          title="Apple Store"
        />
        <AppStoreButton
          startIcon={<Iconify width={28} icon="logos:google-play-icon" />}
          caption="Download from"
          title="Google Play"
        />
      </Box>
    </>
  );

  const renderList = (
    <Box
      component="ul"
      sx={{
        columnGap: 2,
        display: 'none',
        columnCount: { xs: 3, lg: 4 },
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'block',
        },
      }}
    >
      {listItems.map((list) => (
        <Stack
          component="li"
          gap={1.25}
          key={list.subheader}
          alignItems="flex-start"
          sx={{ mb: 2, breakInside: 'avoid' }}
        >
          <Typography variant="subtitle2">{list.subheader}</Typography>

          <Box component="ul" sx={{ gap: 'inherit', display: 'flex', flexDirection: 'column' }}>
            {list.items.map((item) => {
              const active = item.path === removeLastSlash(pathname);

              return (
                <Box component="li" key={item.title} sx={{ display: 'inline-flex' }}>
                  <Link
                    component={RouterLink}
                    href={item.path}
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' },
                      ...(active && { color: 'text.primary', fontWeight: 'fontWeightSemiBold' }),
                    }}
                  >
                    {item.title}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Stack>
      ))}
    </Box>
  );

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `solid 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ py: 10 }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <SectionBlock layoutQuery={layoutQuery} sx={{ gap: 3 }}>
                {renderInfo}
              </SectionBlock>

              <SectionBlock layoutQuery={layoutQuery} sx={{ gap: 1 }}>
                {renderCommunity}
              </SectionBlock>

              <SectionBlock layoutQuery={layoutQuery}>{renderSubscribe}</SectionBlock>

              <SectionBlock layoutQuery={layoutQuery}>{renderSocials}</SectionBlock>

              <SectionBlock layoutQuery={layoutQuery}>{renderApps}</SectionBlock>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} lg={6} component="nav">
            {renderList}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container
        sx={{
          py: 3,
          gap: 2.5,
          display: 'flex',
          textAlign: 'center',
          color: 'text.secondary',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Typography variant="caption"> © All rights reserved.</Typography>

        <Box component="span" gap={1.5} display="flex" alignItems="center" justifyContent="center">
          <Link variant="caption" color="inherit">
            Help center
          </Link>
          <Box
            sx={{
              width: 3,
              height: 3,
              opacity: 0.4,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          <Link variant="caption" color="inherit">
            Terms of service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
