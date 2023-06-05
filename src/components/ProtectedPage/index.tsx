import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { ClientProvider } from "../../providers/ClientProvider";
import { ContactProvider } from "../../providers/ContactProvider";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <ClientProvider>
      <ContactProvider>
        {token ? <Outlet /> : <span>Loading...</span>}
      </ContactProvider>
    </ClientProvider>
  );
};
