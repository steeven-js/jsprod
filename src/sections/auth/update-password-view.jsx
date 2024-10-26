import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { ResetPasswordSchema } from './components/schema';

// ----------------------------------------------------------------------

export function UpdatePasswordView() {
  const password = useBoolean();

  const defaultValues = {
    code: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderForm = (
    <>
      <Field.Text name="email" label="Email address" placeholder="example@gmail.com" />

      <Field.Code name="code" sx={{ mt: 3 }} />

      <Field.Text
        name="password"
        label="Password"
        placeholder="6+ characters"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 3 }}
      />

      <Field.Text
        name="confirmPassword"
        label="Confirm password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mt: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Update password..."
        sx={{ mt: 3 }}
      >
        Update password
      </LoadingButton>
    </>
  );

  return (
    <Stack sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        alt="Reset password"
        src={`${CONFIG.assetsDir}/assets/icons/auth/ic-lock-password.svg`}
        sx={{ mb: 3, width: 96, height: 96, mx: 'auto' }}
      />

      <Typography variant="h4">Update password</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
        {`We've sent a 6-digit confirmation email to your email. Please enter the code in below box to verify your email.`}
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Typography variant="body2" sx={{ my: 3, mx: 'auto' }}>
        {`Don’t have a code? `}
        <Link variant="subtitle2" sx={{ cursor: 'pointer' }}>
          Resend
        </Link>
      </Typography>

      <Link
        component={RouterLink}
        href={paths.split.signIn}
        color="inherit"
        variant="subtitle2"
        sx={{
          gap: 1,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify width={16} icon="solar:alt-arrow-left-outline" />
        Return to sign in
      </Link>
    </Stack>
  );
}
