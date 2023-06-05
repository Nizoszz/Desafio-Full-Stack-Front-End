import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPageContainer = styled.div`
  width: 36.9rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  && img {
    width: 14.4rem;
    height: 5rem;
    align-self: center;
  }

  @media (max-width: 425px) {
    width: 29.6rem;
    && img {
      align-self: center;
      width: 10.1rem;
      height: 5rem;
    }
  }
`;

export const LoginFormContainer = styled.div`
  padding: 4.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey3);
  border-radius: 0.4rem;
  gap: 2.2rem;
`;
