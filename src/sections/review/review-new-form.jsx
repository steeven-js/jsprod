import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const ReviewSchema = zod.object({
  rating: zod.number().min(1, 'Rating must be greater than or equal to 1!'),
  name: zod.string().min(1, { message: 'Name is required!' }),
  review: zod.string().min(1, { message: 'Review is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export function ReviewNewForm({ onClose, ...other }) {
  const defaultValues = {
    rating: 0,
    review: '',
    name: '',
    email: '',
  };

  const methods = useForm({
    resolver: zodResolver(ReviewSchema),
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
      onClose();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} {...other}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle sx={{ typography: 'h3', pb: 3 }}>Review</DialogTitle>

        <DialogContent sx={{ py: 0 }}>
          <Stack spacing={2.5}>
            <div>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Your rating:
              </Typography>
              <Field.Rating name="rating" />
            </div>

            <Field.Text multiline rows={3} name="review" label="Review *" />

            <Field.Text name="name" label="Name *" />

            <Field.Text name="email" label="Email address *" />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose} color="inherit">
            Cancel
          </Button>

          <LoadingButton color="inherit" type="submit" variant="contained" loading={isSubmitting}>
            Post review
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
