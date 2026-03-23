import { Table } from "react-bootstrap";
import methods from "../../../core/methods/methods.js";
import { useContext } from "react";
import { Context } from "../../../core/context/Context.jsx";

const UserData = () => {
  const { blockchainData, removeSymbols } = useContext(Context);

  return (
    <Table>
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        {blockchainData
          .filter((i) => i.value.includes(methods.sender))
          .map((item, idx) => (
            <tr key={idx}>
              <td>{item.key}</td>
              <td>{removeSymbols(item.value)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export { UserData };
