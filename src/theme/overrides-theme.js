import { accordionClasses } from '@mui/material/Accordion';

// ----------------------------------------------------------------------

export const overridesTheme = {
  components: {
    MuiTextField: {
      defaultProps: { variant: 'filled' },
    },
    MuiFormControl: {
      defaultProps: { variant: 'filled' },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: 'transparent',
          borderBottom: `1px solid ${theme.vars.palette.divider}`,
          '&::before': {
            display: 'none',
          },
          '&:last-of-type': {
            borderRadius: 0,
          },
          [`&.${accordionClasses.expanded}`]: {
            margin: 0,
          },
          [`&.${accordionClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 64,
        },
        content: ({ theme }) => ({
          margin: 0,
          padding: theme.spacing(1.5, 0),
          [`&.${accordionClasses.expanded}`]: {
            margin: 0,
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(0, 0, 2, 0),
        }),
      },
    },
  },
};

/**
 ```jsx
  colorSchemes: {
    light: {
      palette: {
        primary: createPaletteChannel({
          lighter: '#E4DCFD',
          light: '#A996F8',
          main: '#6950E8',
          dark: '#3828A7',
          darker: '#180F6F',
          contrastText: '#FFFFFF',
        }),
      },
    },
  },
  shape: { borderRadius: 0 },
 ```
 */
