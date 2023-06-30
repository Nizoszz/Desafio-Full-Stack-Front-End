import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services";
import { MessageToast } from "../../styles/messageToast";
import {
  iClientProps,
  iUserContext,
  iUserProps,
  iUserProviderProps,
} from "../types";
import { iLoginFormValues } from "../../components/Form/LoginForm/types";
import { iRegisterFormValues } from "../../components/Form/RegisterForm/types";
import jwtDecode from "jwt-decode";
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUserProps | null>(null);
  const [settingsModal, setSettingsModal] = useState("");
  const [clients, setClients] = useState<iClientProps[]>([]);
  const navigate = useNavigate();
  const [globalLoading, setGlobalLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      if (!token) {
        return;
      }
      try {
        setGlobalLoading(true);
        const { sub }: never = jwtDecode(token);
        const request = await api.get(`users/${sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(request.data);
        setClients(request.data.client);
        navigate("dashboard");
      } catch (error) {
        localStorage.clear();
        setUser(null);
      } finally {
        setGlobalLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const userLogin = async (
    data: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(api.post("login", data), {
        pending: {
          render() {
            return <MessageToast message="Loading..." />;
          },
          icon: true,
          theme: "dark",
        },
        success: {
          render({ data }) {
            return <MessageToast message={`Hello ${data?.data.user.name}!`} />;
          },
          icon: true,
          theme: "dark",
        },
        error: {
          render() {
            return <MessageToast message="Login failed" />;
          },
          icon: true,
          theme: "dark",
        },
      });

      localStorage.setItem("@TOKEN", request.data.token);
      setUser(request.data.user);
      setClients(request.data.user.client);
      navigate("dashboard");
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("");
  };

  const userRegister = async (
    data: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const request = await toast.promise(api.post("users", data),
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
            return <MessageToast message="Create account successfully!" />;
          },
          icon: true,
          theme: "dark",
        },
        error: {
          render() {
            return <MessageToast message="Accout not create" />;
          },
          icon: true,
          theme: "dark",
        },
      });
      navigate("");
      return request.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userLogout,
        userRegister,
        user,
        userLogin,
        globalLoading,
        token,
        setUser,
        clients,
        setClients,
        settingsModal,
        setSettingsModal,
        setModal,
        modal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
