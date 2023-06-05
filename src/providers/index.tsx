import { iProviderProps } from "./types";
import { UserProvider } from "./UserProvider";

export const Providers = ({ children }: iProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};
