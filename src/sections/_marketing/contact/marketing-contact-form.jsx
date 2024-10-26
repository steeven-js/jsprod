import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';

import { fCurrency } from 'src/utils/format-number';

import { _tags } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const MarketingContactSchema = zod.object({
  services: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  compnany: zod.string().min(1, { message: 'Full name is required!' }),
  website: zod.string().min(1, { message: 'Full name is required!' }),
  message: zod.string().min(1, { message: 'Full name is required!' }),
  // Not required
  firstName: zod.string(),
  lastName: zod.string(),
  phoneNumber: zod.string(),
  budget: zod.number().array(),
});

// ----------------------------------------------------------------------

export function MarketingContactForm({ sx, ...other }) {
  const defaultValues = {
    email: '',
    website: '',
    message: '',
    services: [],
    compnany: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    budget: [2000, 10000],
  };

  const methods = useForm({
    resolver: zodResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <Box sx={sx} {...other}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Stack spacing={2.5} alignItems="flex-start">
          <div>
            <Box gap={1} display="flex" flexWrap="wrap">
              {_tags.slice(0, 5).map((service) => (
                <ButtonBase
                  disableRipple
                  key={service}
                  onClick={() =>
                    setValue('services', getSelected(values.services, service), {
                      shouldValidate: true,
                    })
                  }
                  sx={{
                    py: 0.5,
                    px: 1.25,
                    borderRadius: 1,
                    typography: 'body2',
                    color: 'text.secondary',
                    border: (theme) =>
                      `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,

                    ...(values.services.includes(service) && {
                      bgcolor: 'text.primary',
                      color: 'background.paper',
                    }),
                  }}
                >
                  {service}
                </ButtonBase>
              ))}
            </Box>

            {!!errors.services && (
              <FormHelperText error sx={{ px: 2 }}>
                {errors.services.message}
              </FormHelperText>
            )}
          </div>

          <Stack
            spacing={{ xs: 2.5, md: 2 }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ width: 1 }}
          >
            <Field.Text name="firstName" label="First name" />
            <Field.Text name="lastName" label="Last name" />
          </Stack>

          <Field.Text name="email" label="Email" />
          <Field.Text name="phoneNumber" label="Phone number" />

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2.5, md: 2 }}
            sx={{ width: 1 }}
          >
            <Field.Text name="compnany" label="Compnany" />

            <Field.Text name="website" label="Website" />
          </Stack>

          <Stack spacing={5} sx={{ py: 2, width: 1 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Your Budget
            </Typography>

            <Field.Slider
              name="budget"
              valueLabelDisplay="on"
              max={20000}
              step={1000}
              valueLabelFormat={(value) => fCurrency(value)}
            />
          </Stack>

          <Field.Text name="message" label="Message" multiline rows={4} />
        </Stack>

        <LoadingButton
          size="large"
          color="inherit"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3 }}
        >
          Send request
        </LoadingButton>
      </Form>
    </Box>
  );
}
