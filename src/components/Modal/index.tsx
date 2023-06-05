import { StyledText, StyledTitle } from "../../styles/typography";
import {
  HeaderContactModal,
  ModalContactContainer,
  ModalContainer,
  ModalWrapper,
} from "./style";
import { MdClose } from "react-icons/md";
import { useContext, useRef } from "react";
import { ModalForm } from "./TypesModal/RegisterClientModal";
import { useOutClick } from "../../hooks/useOutClick";
import { iModalProps } from "./types";
import { UserContext } from "../../providers/UserProvider";
import { EditClientModalForm } from "./TypesModal/EditClientModal";
import { ContactList } from "./ContactList";
import { ClientContext } from "../../providers/ClientProvider";
import { EditContactModalForm } from "./TypesModal/EditContactModal";
import { ButtonStyled } from "../../styles/button";
import { ModalContactForm } from "./TypesModal/RegisterContactModal";

export const Modal = ({ typeModal }: iModalProps) => {
  const { setModal, setSettingsModal } = useContext(UserContext);
  const { client } = useContext(ClientContext);

  const modalRemove = () => {
    setModal(false);
  };

  const addContact = () => {
    setSettingsModal("registerContact");
  };

  const close: any = useRef();
  useOutClick(close, () => setModal(false));

  const switchModal = () => {
    switch (typeModal) {
      case "registerClient":
        return (
          <ModalContainer ref={close}>
            <div>
              <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                Register client
              </StyledTitle>
              <button>
                <MdClose size={26} color="#868E96" onClick={modalRemove} />
              </button>
            </div>
            <ModalForm />
          </ModalContainer>
        );
      case "editClient":
        return (
          <ModalContainer ref={close}>
            <div>
              <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                Client edit details
              </StyledTitle>

              <button>
                <MdClose size={26} color="#868E96" onClick={modalRemove} />
              </button>
            </div>
            <EditClientModalForm />
          </ModalContainer>
        );
      case "clientContact":
        return (
          <ModalContactContainer ref={close}>
            <div>
              <HeaderContactModal>
                <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                  Client: {client?.name[0].toUpperCase()}
                  {client?.name.substring(1, 15)}
                </StyledTitle>
                <StyledText tag="HeadlineBold" color="#F8F9FA">
                  Email: {client?.email} Phone: {client?.phone}
                </StyledText>
              </HeaderContactModal>
              <div>
                <ButtonStyled
                  weigth={400}
                  buttonStyle="buttonPlus"
                  onClick={addContact}
                >
                  Add Contact
                </ButtonStyled>
                <button>
                  <MdClose size={26} color="#868E96" onClick={modalRemove} />
                </button>
              </div>
            </div>
            <ContactList />
          </ModalContactContainer>
        );
      case "registerContact":
        return (
          <ModalContainer ref={close}>
            <div>
              <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                Register contact
              </StyledTitle>
              <button>
                <MdClose size={26} color="#868E96" onClick={modalRemove} />
              </button>
            </div>
            <ModalContactForm />
          </ModalContainer>
        );
      case "editContact":
        return (
          <ModalContainer ref={close}>
            <div>
              <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                Contact edit details
              </StyledTitle>

              <button>
                <MdClose size={26} color="#868E96" onClick={modalRemove} />
              </button>
            </div>
            <EditContactModalForm />
          </ModalContainer>
        );
      case "editUser":
        return (
          <ModalContainer ref={close}>
            <div>
              <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
                User edit details
              </StyledTitle>

              <button>
                <MdClose size={26} color="#868E96" onClick={modalRemove} />
              </button>
            </div>
            <ModalForm />
          </ModalContainer>
        );
      // case "athleteDepositions":
      //   return (
      //     <div>
      //       <div>
      //         <div />
      //         <h3 className="title-2">Deixe um depoimento para o atleta</h3>
      //       </div>
      //       <button onClick={handleClick}>
      //         <img src={closeModal} />
      //       </button>
      //       <DepositionsForm />
      //     </div>
      //   );
      // case "donateConfirm":
      //   return (
      //     <div>
      //       <div>
      //         <div />
      //         <h3 className="title-2">Confirmação</h3>
      //       </div>
      //       <button onClick={handleClick}>
      //         <img src={closeModal} />
      //       </button>
      //       <DonateConfirmation />
      //     </div>
      //   );
      // case "userDataEdit":
      //   return (
      //     <div>
      //       <div>
      //         <div />
      //         <h3 className="title-2">Editar dados do usuário</h3>
      //       </div>
      //       <button onClick={handleClick}>
      //         <img src={closeModal} />
      //       </button>
      //       <UserDataEdit />
      //     </div>
      //   );
    }
  };
  return <ModalWrapper>{switchModal()}</ModalWrapper>;
};
