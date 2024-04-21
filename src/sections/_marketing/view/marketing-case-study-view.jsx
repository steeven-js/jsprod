import remarkGfm from 'remark-gfm'
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import useFetchStudies from 'src/hooks/use-fetchStudies';

import Image from 'src/components/image';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MarketingCaseStudyListSimilar from '../list/marketing-case-study-list-similar';
import MarketingCaseStudyDetailsGallery from '../details/marketing-case-study-details-gallery';
import MarketingCaseStudyDetailsSummary from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyView({ study }) {

  // Récupérez l'URL de la couverture de l'étude
  const studyCover = study.media && study.media.length > 0 ? study.media.find(media => media.collection_name === 'study-cover') : null;
  const studyCoverUrl = studyCover ? studyCover.original_url : null;

  // Tableau d'image pour la galerie
  const galleryImgs = study.media && study.media.length > 0 ? study.media.filter(media => media.collection_name === 'study-gallery') : [];
  const galleryImages = galleryImgs.map(media => media.original_url);

  const { studies } = useFetchStudies();

  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image alt="hero" src={
          studyCoverUrl || '/assets/images/marketing/marketing_post_hero.jpg'
        } ratio="16/9" sx={{ borderRadius: 2 }} />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: paths.marketing.caseStudies },
            { name: study.title },
          ]}
        />

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary study={study} />
          </Grid>

          <Grid xs={12} md={8}>

            <Markdown
              children={study.content}
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  // eslint-disable-next-line react/prop-types, no-unused-vars
                  const { children, className, node, ...rest } = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={dracula}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            />

            {galleryImages.length > 2 && (<MarketingCaseStudyDetailsGallery images={galleryImages} />)}

          </Grid>
        </Grid>
      </Container>

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}

      {studies.length > 3 ? <MarketingCaseStudyListSimilar studies={studies.slice(0, 3)} /> : null}

      {/*
      <MarketingLandingFreeSEO />

      <MarketingNewsletter /> */}
    </>
  );
}

MarketingCaseStudyView.propTypes = {
  study: PropTypes.object
};
