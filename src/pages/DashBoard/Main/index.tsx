import { useContext } from "react";
import { ClientList } from "../../../components/ClientList";

import { ButtonStyled } from "../../../styles/button";
import { Container } from "../../../styles/container";
import { StyledTitle } from "../../../styles/typography";
import { MainContentContainer, MainStyled } from "./style";
import { UserContext } from "../../../providers/UserProvider";

export const Main = () => {
  const { setSettingsModal, setModal } = useContext(UserContext);

  const registerClient = () => {
    setModal(true);
    setSettingsModal("registerClient");
  };

  return (
    <MainStyled>
      <Container>
        <MainContentContainer>
          <div>
            <StyledTitle tag="Title1" color="#F8F9FA">
              Clientes
            </StyledTitle>
            <ButtonStyled
              weigth={400}
              buttonStyle="buttonPlus"
              onClick={registerClient}
            >
              Adicionar cliente
            </ButtonStyled>
          </div>
          <ClientList />
        </MainContentContainer>
      </Container>
    </MainStyled>
  );
};
