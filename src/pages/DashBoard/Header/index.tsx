import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { Container } from "../../../styles/container";
import { StyledTitle } from "../../../styles/typography";
import { HeaderContentContainer, HeaderStyled } from "./style";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyled>
      <Container>
        <HeaderContentContainer>
          <StyledTitle tag="Title1" color="#F8F9FA">
            Olá, {user?.name}
          </StyledTitle>
        </HeaderContentContainer>
      </Container>
    </HeaderStyled>
  );
};
