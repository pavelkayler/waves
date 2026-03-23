import { Authorization } from "../components/Authorization.jsx";
import { Header } from "../components/Header.jsx";
import { Registration } from "../components/userFunctions/Registration.jsx";
import { useContext } from "react";
import { Context } from "../../core/context/Context.jsx";

const MainPage = () => {
  const { login } = useContext(Context);
  return (
    <>
      <Header />
      <div className="container2">{login ? <Registration /> : <Authorization />}</div>
    </>
  );
};

export default MainPage;
