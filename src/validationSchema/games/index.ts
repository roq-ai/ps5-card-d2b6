import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  publisher: yup.string().required(),
  release_date: yup.date().required(),
  genre: yup.string().required(),
  rating: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
