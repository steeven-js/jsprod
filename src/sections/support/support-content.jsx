import { useState, useCallback } from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SupportContent({ contents }) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <div>
      {contents.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary>
            <Typography variant="subtitle1" sx={{ pr: 1, flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'eva:minus-outline' : 'eva:plus-outline'}
              sx={{ transform: 'translateY(2px)' }}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
