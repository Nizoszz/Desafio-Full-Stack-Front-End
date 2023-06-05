import { useContext } from "react";
import { Modal } from "../../components/Modal";
import { Header } from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { UserContext } from "../../providers/UserProvider";

export const DashBoard = () => {
  const { modal, settingsModal } = useContext(UserContext);

  return (
    <>
      {modal && <Modal typeModal={settingsModal} />}
      <Navbar />
      <Header />
      <Main />
    </>
  );
};
