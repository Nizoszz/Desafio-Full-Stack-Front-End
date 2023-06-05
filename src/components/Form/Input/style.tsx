import styled from "styled-components";

export const FieldSetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2.23rem;
`;

export const LabelStyled = styled.label`
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--color-grey0);
`;

export const InputStyled = styled.input`
  height: 4.4rem;
  width: 89.54%;
  padding: 0rem 1.6rem;
  background-color: var(--color-grey2);
  outline: none;
  color: var(--color-grey0);
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-grey2);

  &&::placeholder {
    color: var(--color-grey1);
  }

  &&:focus {
    color: var(--color-grey0);
    background-color: var(--color-grey2);
    border: 0.1rem solid var(--color-grey0);
  }
`;
