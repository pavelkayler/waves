import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../../core/context/Context.jsx";

const TransfersList = () => {
  const { transactions, removeSymbols } = useContext(Context);

  return (
    <div style={{ whiteSpace: "" }}>
      <Table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, idx) => (
            <tr key={idx}>
              <td>{item.key}</td>
              <td>{removeSymbols(item.value)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export { TransfersList };
