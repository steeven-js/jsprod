import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paths } from 'src/routes/paths';

import { Form } from 'src/components/hook-form';

import { FormHead } from './components/form-head';
import { SignInSchema } from './components/schema';
import { SignInForm } from './components/sign-in-form';
import { FormSocials } from './components/form-socials';
import { FormDivider } from './components/form-divider';

// ----------------------------------------------------------------------

export function SignInCenteredView() {
  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
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
      <FormHead
        variant="sign-in"
        title="Sign in"
        href={paths.centered.signUp}
        sx={{ mb: 4, textAlign: 'center' }}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <SignInForm />
      </Form>

      <FormDivider label="or continue with" />

      <FormSocials />
    </>
  );
}
