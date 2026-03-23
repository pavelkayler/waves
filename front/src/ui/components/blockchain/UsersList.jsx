import { useContext } from "react";
import { Context } from "../../../core/context/Context.jsx";
import { Table } from "react-bootstrap";

const UsersList = () => {
  const { users, removeSymbols } = useContext(Context);

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
          {users.map((item, idx) => (
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

export { UsersList };
