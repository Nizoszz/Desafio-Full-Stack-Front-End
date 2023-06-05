import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../../styles/button";
import { Input } from "../Input";
import { ErrorParagraph, FormLoginStyled } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./loginSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { iLoginFormValues } from "./types";
import { SubmitHandler } from "react-hook-form";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <FormLoginStyled onSubmit={handleSubmit(submit)}>
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
        label="Senha"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && (
        <ErrorParagraph>{errors.password.message}</ErrorParagraph>
      )}
      <ButtonStyled type="submit" buttonStyle="default" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </ButtonStyled>
    </FormLoginStyled>
  );
};
