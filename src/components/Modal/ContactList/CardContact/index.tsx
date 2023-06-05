import {
  CardContactStyled,
  EditContactButton,
  TrashContactButton,
} from "./style";
import trasher from "../../../../assets/img/trasher.svg";
import refresh from "../../../../assets/img/refresh.svg";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../../providers/UserProvider";
import { StyledText, StyledTitle } from "../../../../styles/typography";
import { iContactProps } from "../../../../providers/types";
import { ContactContext } from "../../../../providers/ContactProvider";

export const CardContact = ({ email, name, phone, id }: iContactProps) => {
  const { setIdContact, deleteContact } = useContext(ContactContext);
  const { setModal, setSettingsModal } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const removeClient = () => {
    deleteContact(id, setLoading);
  };

  const submit = () => {
    setModal(true);
    setSettingsModal("editContact");
    setIdContact(id);
  };
  return (
    <CardContactStyled>
      <StyledTitle color="#F8F9FA" tag="Title3" titleStyle="Title3">
        {name}
      </StyledTitle>
      <div>
        <StyledText tag="HeadlineBold" color="#868E96">
          {email}
        </StyledText>
        <StyledText tag="HeadlineBold" color="#868E96">
          {phone}
        </StyledText>
        <div>
          <EditContactButton onClick={submit} disabled={loading}>
            <img src={refresh} alt="" />
          </EditContactButton>
          <TrashContactButton onClick={removeClient} disabled={loading}>
            <img src={trasher} alt="" />
          </TrashContactButton>
        </div>
      </div>
    </CardContactStyled>
  );
};
