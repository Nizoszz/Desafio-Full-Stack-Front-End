import { Container } from "../../styles/container";
import {
  HeaderDiv,
  RegisterFormContainer,
  RegisterPageContainer,
  RegisterWrapper,
} from "./style";
import ClientAPP from "../../assets/img/ClientAPP.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledText, StyledTitle } from "../../styles/typography";
import { ButtonStyled } from "../../styles/button";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  return (
    <RegisterWrapper>
      <Container>
        <RegisterPageContainer>
          <HeaderDiv>
            <img src={ClientAPP} alt="ClientAPP" />
            <ButtonStyled
              weigth={600}
              buttonStyle="defaultButtonSmall"
              onClick={handleReturn}
            >
              Back
            </ButtonStyled>
          </HeaderDiv>
          <RegisterFormContainer>
            <StyledTitle
              tag="Title1"
              titleStyle="default"
              color="#F8F9FA"
              textAlign="center"
            >
              Create your account
            </StyledTitle>
            <StyledText
              tag="Headline"
              textStyle="default"
              color="#868E96"
              textAlign="center"
            >
              Fast and free, let's go!
            </StyledText>
            <RegisterForm />
          </RegisterFormContainer>
        </RegisterPageContainer>
      </Container>
    </RegisterWrapper>
  );
};
