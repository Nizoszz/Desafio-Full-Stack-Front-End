import styled from "styled-components";
export const CardContactStyled = styled.li`
  min-height: 4.9rem;
  background-color: var(--color-grey3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.218rem;
  filter: brightness(0.8);
  border-radius: 0.4rem;
  cursor: pointer;

  &&:hover {
    background-color: var(--color-grey2);
    color: var(--color-grey0);
    filter: brightness(1);
  }

  h3 {
    width: 15rem;
  }

  && > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 50rem;
    gap: 2.5rem;
    margin-right: 1rem;

    & > div {
      display: flex;
      gap: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    && > div {
      justify-content: flex-end;

      && > div {
        width: unset;
      }
      span {
        display: none;
      }
    }
  }
`;

export const TrashContactButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  && img {
    align-self: center;
    object-fit: cover;
    height: 1.7rem;
    width: 1.7rem;
  }
`;

export const EditContactButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  width: 40%;

  && img {
    align-self: center;
    object-fit: cover;
    height: 1.7rem;
    width: 1.7rem;
  }
`;

export const AddContactButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  width: 40%;

  && img {
    align-self: center;
    object-fit: cover;
    height: 1.7rem;
    width: 1.7rem;
  }
`;
