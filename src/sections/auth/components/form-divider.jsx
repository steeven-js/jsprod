import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

export function FormDivider({ sx, label }) {
  return (
    <Divider
      sx={{
        py: 3,
        typography: 'body2',
        color: 'text.disabled',
        fontWeight: 'fontWeightMedium',
        '&::before, &::after': { borderTopStyle: 'dashed' },
        ...sx,
      }}
    >
      {label}
    </Divider>
  );
}
