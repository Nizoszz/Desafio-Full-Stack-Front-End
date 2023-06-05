import * as yup from "yup";
export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your name")
    .min(3, "Your name must contain at least three characters"),
  email: yup
    .string()
    .required("Enter your e-mail")
    .email("Enter a valid e-mail"),
  password: yup
    .string()
    .required("Enter your password")
    .matches(
      /(?=.*?[A-Z])/,
      "Your password must contain at least one upper case letter"
    )
    .matches(
      /(?=.*?[a-z])/,
      "Your password must contain at least one lower case letter"
    )
    .matches(/(?=.*?[0-9])/, "Your password must contain at least one number")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "Your password must contain at least one special character"
    )
    .min(8, "Your password must contain a minimum of eigth characters"),

});
