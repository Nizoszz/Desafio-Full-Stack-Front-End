import { createContext, useState, useContext } from "react";
import {
  iContactContext,
  iContactProps,
  iContactProviderProps,
} from "../types";
import { api } from "../../services";
import { iEditContactFormValues } from "../../components/Modal/TypesModal/EditContactModal/types";
import { iCreateContactFormValues } from "../../components/Modal/TypesModal/RegisterContactModal/types";
import { MessageToast } from "../../styles/messageToast";
import { toast } from "react-toastify";
import { ClientContext } from "../ClientProvider";

export const ContactContext = createContext({} as iContactContext);
export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [contacts, setContacts] = useState<iContactProps[]>([]);
  const [idContact, setIdContact] = useState<string>("");
  const token = localStorage.getItem("@TOKEN");
  const { idClient } = useContext(ClientContext);
  const retrieveContact = async (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await api.get(`contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(request.data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const createContact = async (
    data: iCreateContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.post(
          "contacts",
          { ...data, clientId: `${idClient}` },
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
              return <MessageToast message="Add contact successfully" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Add contact failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      return request.data;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (
    id: string,
    data: iEditContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(
        api.patch(`contacts/${id}`, data, {
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
              return <MessageToast message="Update contact succesfully!" />;
            },
            icon: true,
            theme: "dark",
          },
          error: {
            render() {
              return <MessageToast message="Update contact failed" />;
            },
            icon: true,
            theme: "dark",
          },
        }
      );
      return request.data;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await api.delete(`contacts/${id}`, {
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
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        retrieveContact,
        updateContact,
        idContact,
        setIdContact,
        createContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
