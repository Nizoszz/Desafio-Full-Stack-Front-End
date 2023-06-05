import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty("Enter valid email"),
  password: z.string().nonempty("Enter valid password"),
});
