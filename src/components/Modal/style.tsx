import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  align-self: center;
  position: absolute;
  width: 100%;
  max-width: 36.9rem;
  min-height: 34.2rem;
  border-radius: 0.4rem;
  background-color: var(--color-grey3);

  && > div {
    height: 5rem;
    background-color: var(--color-grey2);
    padding: 0rem 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  && > div > button {
    width: 2.6rem;
    height: 2.6rem;
    background-color: transparent;
    outline: none;
    border: none;
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ModalContactContainer = styled.div`
  align-self: center;
  position: absolute;
  width: 100%;
  max-width: 80rem;
  min-height: 34.2rem;
  border-radius: 0.4rem;
  background-color: var(--color-grey3);
  top: 17%;

  && > div {
    height: 5rem;
    background-color: var(--color-grey2);
    padding: 0rem 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  && > div > :nth-child(2) {
    display: flex;
    gap: 1rem;
  }
  && > div > :nth-child(2) > :nth-child(2) {
    width: 2.6rem;
    height: 2.6rem;
    background-color: transparent;
    outline: none;
    border: none;
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const HeaderContactModal = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
