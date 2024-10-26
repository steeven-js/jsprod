import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { ResetPasswordSchema } from './components/schema';

// ----------------------------------------------------------------------

export function ResetPasswordView() {
  const defaultValues = {
    email: '',
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
      <Field.Text name="email" hiddenLabel placeholder="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send request
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

      <Typography variant="h4">Forgot your password?</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
        {`Please enter the email address associated with your account and we'll email you a link to reset your password.`}
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Link
        component={RouterLink}
        href={paths.split.signIn}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
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
