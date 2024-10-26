import { useFormContext } from 'react-hook-form';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export function SignInForm({ sx }) {
  const showPassword = useBoolean();

  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Stack spacing={3} sx={sx}>
      <Field.Text name="email" label="Email address" InputLabelProps={{ shrink: true }} />

      <Field.Text
        name="password"
        label="Password"
        placeholder="6+ characters"
        type={showPassword.value ? 'text' : 'password'}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={showPassword.onToggle} edge="end">
                <Iconify
                  icon={showPassword.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        component={RouterLink}
        href={paths.resetPassword}
        variant="body2"
        color="inherit"
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Sign in
      </LoadingButton>
    </Stack>
  );
}
