import { Header } from "../components/Header.jsx";
import { CreateTransfer } from "../components/userFunctions/CreateTransfer.jsx";
import { ChangePersonalData } from "../components/userFunctions/ChangePersonalData.jsx";
import { AddOrRemovePostalWorker } from "../components/userFunctions/AddOrRemovePostalWorker.jsx";
import { useContext } from "react";
import { Context } from "../../core/context/Context.jsx";
import { ChangeIdentifier } from "../components/userFunctions/ChangeIdentifier.jsx";
import { SendPostal } from "../components/userFunctions/SendPostal.jsx";
import { AcceptTransfer } from "../components/userFunctions/AcceptTransfer.jsx";
import { CancelTransfer } from "../components/userFunctions/СancelTransfer.jsx";
import { ReceivePostal } from "../components/userFunctions/ReceivePostal.jsx";
import { DeclinePostal } from "../components/userFunctions/DeclinePostal.jsx";

const LkPage = () => {
  const { currentUser } = useContext(Context);
  /*
  className="d-flex flex-column align-items-center" style={{ width: "" }}
   */
  return (
    <>
      <Header />
      <div className="container2">
        {currentUser?.role === "User" && (
          <>
            <AddOrRemovePostalWorker />
            <ChangeIdentifier />
          </>
        )}
        <ChangePersonalData />
        <h3>Переводы</h3>
        <CreateTransfer />
        <AcceptTransfer />
        <CancelTransfer />
        <h3>Посылки</h3>
        <SendPostal />
        <ReceivePostal />
        <DeclinePostal />
      </div>
    </>
  );
};

export default LkPage;
