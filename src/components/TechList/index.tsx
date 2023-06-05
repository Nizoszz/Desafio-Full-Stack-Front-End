import { useContext } from "react";
import { CardClient } from "./CardClient";
import { ClientUl } from "./style";
import { UserContext } from "../../providers/UserProvider";

export const ClientList = () => {
  const { clients } = useContext(UserContext);

  return (
    <ClientUl>
      {clients?.map((client) => {
        return (
          <CardClient
            key={client.id}
            email={client.email}
            name={client.name}
            phone={client.phone}
            id={client.id}
          />
        );
      })}
    </ClientUl>
  );
};
