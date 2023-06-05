import { ButtonStyled } from "../../../styles/button";
import { Container } from "../../../styles/container";
import { NavContentContainer, NavStyle } from "./style";
import ClientAPP from "../../../assets/img/ClientAPP.svg";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const Navbar = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <NavStyle>
      <Container>
        <NavContentContainer>
          <img src={ClientAPP} alt="ClientAPP" />
          <ButtonStyled
            weigth={600}
            buttonStyle="defaultButtonSmall"
            onClick={userLogout}
          >
            Voltar
          </ButtonStyled>
        </NavContentContainer>
      </Container>
    </NavStyle>
  );
};
