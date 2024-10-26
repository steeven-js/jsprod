import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export function MenuButton({ sx, ...other }) {
  return (
    <IconButton color="inherit" sx={sx} {...other}>
      <SvgIcon>
        <path
          d="M5 18H13M5 12H19M5 6H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    </IconButton>
  );
}
