import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
];
export default function MarketingCaseStudyDetailsSummary({ study }) {

  return (
    <Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Sommaire
        </Typography>

        <Typography variant="h6">{study.title}</Typography>

        <Typography variant="body2">{study.description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Website
        </Typography>

        <Link variant="body2" color="inherit">
          {study.website}
        </Link>

        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          Categorie
        </Typography>

        <Typography variant="body2" sx={{ pb: 1 }}>
          {study.category && study.category.name ? study.category.name : 'Uncategorized'}
        </Typography>

        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Date
        </Typography>

        <Typography variant="body2">{fDate(study.created_at)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

MarketingCaseStudyDetailsSummary.propTypes = {
  study: PropTypes.object,
};
