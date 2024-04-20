import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyItem({ project }) {

  return (
    <div>
      <Image
        src={
          project.media && project.media.length > 0
            ? project.media[0].original_url
            : '/assets/images/marketing/marketing_1.jpg'
        }
        alt={project.title}
        ratio="1/1"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {project.category.name}
        </Typography>

        <Link component={RouterLink} to={`${paths.marketing.caseStudy}/${project.id}`} color="inherit">
          <TextMaxLine variant="h5" line={1}>
            {project.title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}

MarketingCaseStudyItem.propTypes = {
  project: PropTypes.object.isRequired,
};
