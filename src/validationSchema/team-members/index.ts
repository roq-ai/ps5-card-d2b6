import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().required(),
  joined_at: yup.date().required(),
  left_at: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});
