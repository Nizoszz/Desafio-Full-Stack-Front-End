import { useContext, useState } from "react";
import { ClientContext } from "../../../../providers/ClientProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditClientSchema } from "./modalEditClientSchema";
import { ModalStyledForm } from "./style";
import { Input } from "../../../Form/Input";
import { ErrorParagraph } from "../../../Form/LoginForm/style";
import { ButtonStyled } from "../../../../styles/button";
import { iEditClientFormValues } from "./types";
import { UserContext } from "../../../../providers/UserProvider";

export const EditClientModalForm = () => {
  const [loading, setLoading] = useState(false);
  const { deleteClient, updateClient, idClient } = useContext(ClientContext);

  const { setModal } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditClientFormValues>({
    mode: "onBlur",
    resolver: zodResolver(ModalEditClientSchema),
  });

  const submit: SubmitHandler<iEditClientFormValues> = (data) => {
    updateClient(idClient, data, setLoading);
    setModal(false);
  };

  const remove = () => {
    deleteClient(idClient, setLoading);
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
