import { useState, useContext } from "react";
import { createContext } from "react";
import { api } from "../../services";
import { iClientContext, iClientProps, iClientProviderProps } from "../types";
import { iEditClientFormValues } from "../../components/Modal/TypesModal/EditClientModal/types";
import { iCreateClientFormValues } from "../../components/Modal/TypesModal/RegisterClientModal/types";
import { UserContext } from "../UserProvider";
import { MessageToast } from "../../styles/messageToast";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: iClientProviderProps) => {
  const { clients, setClients, user } = useContext(UserContext);
  const [addClient, setAddClient] = useState(false);
  const [client, setClient] = useState<iClientProps | null>(null);
  const [idClient, setIdClient] = useState("");

  const token = localStorage.getItem("@TOKEN");

  const deleteClient = async (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await api.delete(`clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
      return request;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (
    data: iCreateClientFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.post(
          "clients",
          {
            ...data,
            userId: `${user?.id}`,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          pending: {
            render() {
              return <MessageToast message="Loading..." />;
            },
            icon: true,
            theme: "dark",
          },
          success: {
            render() {
              return <MessageToast message="Add client successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Add client failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      setClients([...clients, request.data]);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (
    id: string,
    data: iEditClientFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.patch(`clients/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: {
            render() {
              return <MessageToast message="Loading..." />;
            },
            icon: true,
            theme: "dark",
          },
          success: {
            render() {
              return <MessageToast message="Update client successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Update client failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      setClients(request.data);
      window.location.reload();
      return request;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        addClient,
        setAddClient,
        updateClient,
        createClient,
        deleteClient,
        idClient,
        setIdClient,
        client,
        setClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
