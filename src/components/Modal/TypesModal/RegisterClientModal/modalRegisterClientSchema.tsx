import * as z from "zod";

export const ModalRegisterClientSchema = z.object({
  name: z
    .string()
    .nonempty("Enter your client name here")
    .min(3, "Client name must contain at least three characters")
    .max(150, "The client's name has a maximum character limit of 150"),
  email: z
    .string()
    .nonempty("Enter your client e-mail here")
    .email("Enter valid e-mail")
    .max(254, "The client's email has a maximum character limit of 254"),

  phone: z
    .string()
    .min(10, "Enter valid phone here")
    .max(12, "The client's phone has a maximum character limit of 12")
    .nullish(),
});
