import * as yup from "yup";

export const signupSchemas = yup.object({
  username: yup.string().min(3).max(20).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(6).required("password must be 6 charactors"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password must be match"),
});
