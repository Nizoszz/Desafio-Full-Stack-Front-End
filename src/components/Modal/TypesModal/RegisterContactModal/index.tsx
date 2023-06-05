import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalRegisterClientSchema } from "./modalRegisterClientSchema";
import { ModalStyledForm } from "./style";
import { Input } from "../../../Form/Input";
import { ErrorParagraph } from "../../../Form/LoginForm/style";
import { ButtonStyled } from "../../../../styles/button";
import { iCreateContactFormValues } from "./types";
import { UserContext } from "../../../../providers/UserProvider";
import { ContactContext } from "../../../../providers/ContactProvider";

export const ModalContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { createContact } = useContext(ContactContext);
  const { setModal } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<iCreateContactFormValues>({
    mode: "onBlur",
    resolver: zodResolver(ModalRegisterClientSchema),
  });

  const submit: SubmitHandler<iCreateContactFormValues> = (data) => {
    createContact(data, setLoading);
    setModal(false);
  };

  return (
    <>
      <ModalStyledForm onSubmit={handleSubmit(submit)}>
        <Input
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your client name here"
          register={register("name")}
          disabled={loading}
        />
        {errors.name && <ErrorParagraph>{errors.name?.message}</ErrorParagraph>}
        <Input
          id="email"
          label="Email"
          type="text"
          placeholder="Enter your client email here"
          register={register("email")}
          disabled={loading}
        />
        {errors.email && (
          <ErrorParagraph>{errors.email?.message}</ErrorParagraph>
        )}
        <Input
          id="phone"
          label="Phone"
          type="text"
          placeholder="Enter your client phone here"
          register={register("phone")}
          disabled={loading}
        />
        {errors.phone && (
          <ErrorParagraph>{errors.phone?.message}</ErrorParagraph>
        )}

        {!isValid ? (
          <ButtonStyled
            type="submit"
            buttonStyle="disabledButton"
            disabled={!isValid}
          >
            Register contact
          </ButtonStyled>
        ) : (
          <ButtonStyled buttonStyle="default" type="submit">
            {" "}
            Register client
          </ButtonStyled>
        )}
      </ModalStyledForm>
    </>
  );
};
