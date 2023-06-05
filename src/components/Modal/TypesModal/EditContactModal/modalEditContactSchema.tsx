import * as z from "zod";

export const ModalEditClientSchema = z.object({
  name: z
    .string()
    .min(3, "Client name must contain at least three characters")
    .max(150, "The client's name has a maximum character limit of 150")
    .nullable(),
  email: z
    .string()
    .email("Enter valid e-mail")
    .max(254, "The client's email has a maximum character limit of 254")
    .nullable(),

  phone: z
    .string()
    .min(10, "Enter valid phone here")
    .max(12, "The client's phone has a maximum character limit of 12")
    .nullable(),
});
