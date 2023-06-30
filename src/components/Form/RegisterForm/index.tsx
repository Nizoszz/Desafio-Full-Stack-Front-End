
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserProvider";
import { ButtonStyled } from "../../../styles/button";
import { Input } from "../Input";
import { RegisterSchema } from "./registerSchema";
import { ErrorParagraph, FormRegisterStyled } from "./style";
import { iRegisterFormValues } from "./types";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    userRegister(data, setLoading);
  };
  return (
    <FormRegisterStyled onSubmit={handleSubmit(submit)} noValidate>
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Enter your name"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Enter your e-mail"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && (
        <ErrorParagraph>{errors.password.message}</ErrorParagraph>
      )}
      {!isValid ? (
        <ButtonStyled
          type="submit"
          buttonStyle="disabledButton"
          disabled={!isValid}
        >
          Sign up
        </ButtonStyled>
      ) : (
        <ButtonStyled buttonStyle="default" type="submit">
          Sign up
        </ButtonStyled>
      )}
    </FormRegisterStyled>
  );
};
