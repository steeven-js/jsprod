import { useFormContext } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { Field } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignUpForm({ sx }) {
  const showPassword = useBoolean();

  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Stack spacing={3} sx={sx}>
      <Field.Text name="fullName" label="Full name" InputLabelProps={{ shrink: true }} />

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

      <Field.Text
        name="confirmPassword"
        label="Confirm password"
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

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Create account
      </LoadingButton>
    </Stack>
  );
}
