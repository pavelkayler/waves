import { useContext, useEffect } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { UserData } from "./UserData.jsx";
import { TransfersList } from "./TransfersList.jsx";
import { Context } from "../../../core/context/Context.jsx";
import { UsersList } from "./UsersList.jsx";
import methods from "../../../core/methods/methods.js";

const FullData = () => {
  const { blockchainData, setBlockchainData, removeSymbols, login } = useContext(Context);

  useEffect(() => {
    (async () => {
      await methods.load().then((res) => setBlockchainData(res));
    })();
  }, []);

  return (
    <div style={{ whiteSpace: "pre-wrap" }} className="">
      <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="" justify style={{ backgroundColor: "rebeccapurple" }}>
        <Tab eventKey="all" title="All">
          <Table>
            <thead>
              <tr>
                <th>key</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              {blockchainData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.key}</td>
                  <td>{removeSymbols(item.value)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="yours" title="Ваши записи">
          <UserData />
        </Tab>
        <Tab eventKey="transfers" title="Переводы">
          <TransfersList />
        </Tab>
        <Tab eventKey="users" title="Пользователи">
          <UsersList />
        </Tab>
      </Tabs>
    </div>
  );
};

export { FullData };
