import { iLoginFormValues } from "../components/Form/LoginForm/types";
import { iRegisterFormValues } from "../components/Form/RegisterForm/types";
import { iEditClientFormValues } from "../components/Modal/TypesModal/EditClientModal/types";
import { iEditContactFormValues } from "../components/Modal/TypesModal/EditContactModal/types";
import { iCreateClientFormValues } from "../components/Modal/TypesModal/RegisterClientModal/types";
import { iCreateContactFormValues } from "../components/Modal/TypesModal/RegisterContactModal/types";

export interface iProviderProps {
  children: React.ReactNode;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iClientProviderProps {
  children: React.ReactNode;
}

export interface iContactProviderProps {
  children: React.ReactNode;
}

export interface iUserProps {
  email: string;
  name: string;
  id: string;
  client: iClientProps[];
}

export interface iClientProps {
  email: string;
  name: string;
  id: string;
  phone?: string;
  createdAt?: string;
  userId?: string;
}

export interface iContactProps {
  email: string;
  name: string;
  id: string;
  phone?: string;
  createdAt?: string;
  userId?: string;
}

export interface iUserContext {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  user: iUserProps | null;
  userLogin: (
    data: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogout: () => void;
  userRegister: (
    data: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  globalLoading: boolean;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<iUserProps | null>>;
  setClients: React.Dispatch<React.SetStateAction<iClientProps[]>>;
  clients: iClientProps[];
  settingsModal: string;
  setSettingsModal: React.Dispatch<React.SetStateAction<string>>;
}

export interface iClientContext {
  addClient: boolean;
  setAddClient: React.Dispatch<React.SetStateAction<boolean>>;
  client: iClientProps | null;
  setClient: React.Dispatch<React.SetStateAction<iClientProps | null>>;
  idClient: string;
  setIdClient: React.Dispatch<React.SetStateAction<string>>;
  createClient: (
    data: iCreateClientFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  updateClient: (
    id: string,
    data: iEditClientFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  deleteClient: (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export interface iContactContext {
  contacts: iContactProps[];
  setContacts: React.Dispatch<React.SetStateAction<iContactProps[]>>;
  retrieveContact: (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<unknown>;
  updateContact: (
    id: string,
    data: iEditContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  idContact: string;
  setIdContact: React.Dispatch<React.SetStateAction<string>>;
  createContact: (
    data: iCreateContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  deleteContact: (
    id: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
