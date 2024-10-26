import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paths } from 'src/routes/paths';

import { Logo } from 'src/components/logo';
import { Form } from 'src/components/hook-form';

import { FormHead } from './components/form-head';
import { SignUpSchema } from './components/schema';
import { SignUpForm } from './components/sign-up-form';
import { FormSocials } from './components/form-socials';
import { FormDivider } from './components/form-divider';
import { SignUpTerms } from './components/sign-up-terms';

// ----------------------------------------------------------------------

export function SignUpSplitView() {
  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <Logo sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }} />

      <FormHead
        variant="sign-up"
        title="Get started"
        href={paths.split.signIn}
        sx={{
          mb: 4,
          mt: { xs: 5, md: 8 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      />

      <FormSocials />

      <FormDivider label="OR" />

      <Form methods={methods} onSubmit={onSubmit}>
        <SignUpForm />
      </Form>

      <SignUpTerms />
    </>
  );
}
