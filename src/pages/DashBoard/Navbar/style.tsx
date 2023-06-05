import styled from "styled-components";

export const NavStyle = styled.nav`
  height: 7.2rem;
  width: 100vw;
  border: 0.1rem solid var(--color-grey2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  img {
    width: 15rem;
  }
`;
