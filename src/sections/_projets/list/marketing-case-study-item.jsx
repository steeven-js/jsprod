import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function MarketingCaseStudyItem({ project, sx, ...other }) {
  return (
    <Box sx={{ minWidth: 0, ...sx }} {...other}>
      <Image src={project.coverUrl} alt={project.title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Box display="flex" flexDirection="column" sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant="overline" sx={{ mb: 1, color: 'text.disabled' }}>
          {project.category}
        </Typography>

        <Link
          component={RouterLink}
          href={paths.marketing.caseStudy(project.id)}
          color="inherit"
          variant="h6"
          noWrap
        >
          {project.title}
        </Link>
      </Box>
    </Box>
  );
}
