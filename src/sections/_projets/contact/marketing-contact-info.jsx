import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingContactInfo({ sx, ...other }) {
  const rowProps = {
    gap: 2,
    display: 'flex',
    alignItems: 'flex-start',
  };

  return (
    <Box gap={3} display="flex" flexDirection="column" sx={sx} {...other}>
      <Box
        component="img"
        alt="Marketing contact"
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-marketing-contact.svg`}
        sx={{ width: 380, height: 380, display: { xs: 'none', md: 'block' } }}
      />

      <Box {...rowProps}>
        <Iconify width={24} icon="carbon:location" sx={{ mt: '2px' }} />
        <div>
          <Box gap={1} display="flex" alignItems="center" sx={{ mb: 0.5, typography: 'h6' }}>
            Visit us
            <Link>
              <Iconify inline width={18} icon="carbon:launch" />
            </Link>
          </Box>

          <Typography variant="body2">508 Bridle Avenue Newnan, GA 30263e</Typography>
        </div>
      </Box>

      <Box {...rowProps}>
        <Iconify width={24} icon="solar:smartphone-outline" sx={{ mt: '2px' }} />
        <div>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Call us
          </Typography>
          <Typography variant="body2">+1 234 567 890</Typography>
        </div>
      </Box>

      <Box {...rowProps}>
        <Iconify width={24} icon="carbon:email" sx={{ mt: '2px' }} />
        <div>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Talk to us
          </Typography>
          <Link color="inherit" variant="body2" href="mailto:hello@example.com">
            hello@example.com
          </Link>
        </div>
      </Box>

      <Box {...rowProps}>
        <Iconify width={24} icon="solar:clock-circle-outline" sx={{ mt: '2px' }} />
        <div>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Working hours
          </Typography>
          <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
        </div>
      </Box>
    </Box>
  );
}
