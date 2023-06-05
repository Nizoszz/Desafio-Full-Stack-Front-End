import { StyledText, StyledTitle } from "../../../styles/typography";
import {
  AddContactButton,
  CardClientStyled,
  EditClientButton,
  TrashButton,
} from "./style";
import trasher from "../../../assets/img/trasher.svg";
import refresh from "../../../assets/img/refresh.svg";
import addContact from "../../../assets/img/addContact.svg";
import { useContext } from "react";
import { ClientContext } from "../../../providers/ClientProvider";
import { useState } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { iClientProps } from "../../../providers/types";
import { ContactContext } from "../../../providers/ContactProvider";
export const CardClient = ({ email, name, phone, id }: iClientProps) => {
  const { deleteClient, setClient, setIdClient } = useContext(ClientContext);
  const { setModal, setSettingsModal } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { retrieveContact } = useContext(ContactContext);

  const removeClient = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    deleteClient(id, setLoading);
  };

  const submit = () => {
    setModal(true);
    setIdClient(id);
    setSettingsModal("editClient");
  };

  const contactList = () => {
    retrieveContact(id, setLoading);
    setClient({ name, email, phone, id });
    setIdClient(id);
    setModal(true);
    setSettingsModal("clientContact");
  };

  return (
    <CardClientStyled>
      <StyledTitle color="#F8F9FA" tag="Title3" titleStyle="Title3">
        {name[0].toUpperCase()}
        {name.substring(1, 15)}
      </StyledTitle>
      <div>
        <StyledText tag="HeadlineBold" color="#868E96">
          {email}
        </StyledText>
        <StyledText tag="HeadlineBold" color="#868E96">
          {phone}
        </StyledText>
        <div>
          <AddContactButton onClick={contactList} disabled={loading}>
            <img src={addContact} alt="" />
          </AddContactButton>
          <EditClientButton onClick={submit} disabled={loading}>
            <img src={refresh} alt="" />
          </EditClientButton>
          <TrashButton onClick={removeClient} disabled={loading}>
            <img src={trasher} alt="" />
          </TrashButton>
        </div>
      </div>
    </CardClientStyled>
  );
};
