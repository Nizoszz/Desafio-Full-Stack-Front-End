import { FieldSetStyled, InputStyled, LabelStyled } from "./style";
export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  value,
}: any) => {
  return (
    <FieldSetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        value={value}
      />
    </FieldSetStyled>
  );
};
