import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function MarketingCaseStudyDetailsSummary({
  sx,
  title,
  website,
  category,
  createdAt,
  description,
  ...other
}) {
  const renderSocials = (
    <Box display="flex">
      {_socials.map((social) => (
        <IconButton
          key={social.value}
          color="inherit"
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
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
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          sommaire
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={1}>
        {website && (
          <>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Site web
            </Typography>

            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              color="inherit"
            >
              {website}
            </Link>
          </>
        )}

        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          Catégorie
        </Typography>

        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {Array.isArray(category) &&
            category.map((cat, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  py: 0.5,
                  px: 1.5,
                  borderRadius: 1,
                  bgcolor: 'action.selected',
                  mr: 1,
                  mb: 1,
                }}
              >
                {cat}
              </Typography>
            ))}
        </Stack>

        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Date de création
        </Typography>

        <Typography variant="body2">{fDate(createdAt)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box display="flex" alignItems="center">
        <Typography variant="subtitle2" sx={{ mr: 1 }}>
          Me suivre
        </Typography>
        {renderSocials}
      </Box>
    </Box>
  );
}
