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

import { VerifySchema } from './components/schema';

// ----------------------------------------------------------------------

export function VerifyView() {
  const defaultValues = {
    code: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(VerifySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderForm = (
    <>
      <Field.Code name="code" />

      <LoadingButton
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Verify
      </LoadingButton>
    </>
  );

  return (
    <Stack sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        alt="Email inbox"
        src={`${CONFIG.assetsDir}/assets/icons/auth/ic-email-inbox.svg`}
        sx={{ mb: 3, width: 96, height: 96, mx: 'auto' }}
      />

      <Typography variant="h4">Check your email</Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
        {`We've emailed a 6-digit confirmation code. Please enter the code in below box to verify your email.`}
      </Typography>

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {`Don’t have a code? `}
        <Link variant="subtitle2" underline="none">
          Resend
        </Link>
      </Typography>

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
