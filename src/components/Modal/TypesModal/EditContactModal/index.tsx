import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditClientSchema } from "./modalEditContactSchema";
import { ModalStyledForm } from "./style";
import { Input } from "../../../Form/Input";
import { ErrorParagraph } from "../../../Form/LoginForm/style";
import { ButtonStyled } from "../../../../styles/button";
import { iEditContactFormValues } from "./types";
import { UserContext } from "../../../../providers/UserProvider";
import { ContactContext } from "../../../../providers/ContactProvider";

export const EditContactModalForm = () => {
  const [loading, setLoading] = useState(false);
  const { idContact, updateContact, deleteContact } =
    useContext(ContactContext);

  const { setModal } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditContactFormValues>({
    mode: "onBlur",
    resolver: zodResolver(ModalEditClientSchema),
  });

  const submit: SubmitHandler<iEditContactFormValues> = (data) => {
    updateContact(idContact, data, setLoading);
    setModal(false);
  };

  const remove = () => {
    deleteContact(idContact, setLoading);
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
        <div>
          <ButtonStyled buttonStyle="default" type="submit">
            Save change
          </ButtonStyled>
          <ButtonStyled buttonStyle="greyButtonDelete" onClick={() => remove()}>
            Delete
          </ButtonStyled>
        </div>
      </ModalStyledForm>
    </>
  );
};
