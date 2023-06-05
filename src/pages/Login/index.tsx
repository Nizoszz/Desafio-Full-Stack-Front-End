import ClientAPP from "../../assets/img/ClientAPP.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import { ButtonStyled } from "../../styles/button";
import { Container } from "../../styles/container";
import { useNavigate } from "react-router-dom";
import { StyledText, StyledTitle } from "../../styles/typography";
import { LoginFormContainer, LoginPageContainer, LoginWrapper } from "./style";
export const LoginPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("register");
  };
  return (
    <LoginWrapper>
      <Container>
        <LoginPageContainer>
          <img src={ClientAPP} alt="Kenzie Hub" />
          <LoginFormContainer>
            <StyledTitle
              tag="Title1"
              titleStyle="default"
              color="#F8F9FA"
              textAlign="center"
            >
              Login
            </StyledTitle>
            <LoginForm />
            <StyledText tag="HeadlineBold" color="#868E96" textAlign="center">
              Don't have an account yet?
            </StyledText>
            <ButtonStyled
              buttonStyle="greyButtonDefault"
              onClick={handleRedirect}
            >
              Sign up
            </ButtonStyled>
          </LoginFormContainer>
        </LoginPageContainer>
      </Container>
    </LoginWrapper>
  );
};
