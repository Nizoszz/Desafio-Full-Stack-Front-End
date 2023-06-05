import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContentContainer = styled.div`
  margin-top: 3.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 2rem 0rem 0rem;
  gap: 2.3rem;

  && > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
