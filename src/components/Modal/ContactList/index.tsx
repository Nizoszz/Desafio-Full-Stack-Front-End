import { useContext } from "react";
import { ContactUl } from "./style";
import { CardContact } from "./CardContact";
import { ContactContext } from "../../../providers/ContactProvider";

export const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <ContactUl>
      {contacts?.map((client) => {
        return (
          <CardContact
            key={client.id}
            email={client.email}
            name={client.name}
            phone={client.phone}
            id={client.id}
          />
        );
      })}
    </ContactUl>
  );
};
