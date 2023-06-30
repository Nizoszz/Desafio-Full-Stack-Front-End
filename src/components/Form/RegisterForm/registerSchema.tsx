import * as z from "zod";
export const RegisterSchema = z.object({
  name: z
    .string()
    .nonempty("Enter your name")
    .min(3, "Your name must contain at least three characters"),
  email: z.string().nonempty("Enter your e-mail").email("Enter a valid e-mail"),
  password: z
    .string()
    .nonempty("Enter your password")
    .regex(
      /(?=.*?[A-Z])/,
      "Your password must contain at least one upper case letter"
    )
    .regex(
      /(?=.*?[a-z])/,
      "Your password must contain at least one lower case letter"
    )
    .regex(/(?=.*?[0-9])/, "Your password must contain at least one number")
    .regex(
      /(?=.*?[#?!@$%^&*-])/,
      "Your password must contain at least one special character"
    )
    .min(8, "Your password must contain a minimum of eigth characters"),
});
