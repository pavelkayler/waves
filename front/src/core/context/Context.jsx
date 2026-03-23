import { createContext, useEffect, useState } from "react";
import methods from "../methods/methods.js";

const Context = createContext({});
const ContextProvider = ({ children }) => {
  const [blockchainData, setBlockchainData] = useState([]);
  const [wallet, setWallet] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [port, setPort] = useState(0);

  const auth = async (sender, password, port) => {
    await methods
      .authorize(sender, password, port)
      .then(() => {
        setLogin(sender);
        setPassword(password);
        setPort(port);
      })
      .then(
        users.filter((user) => {
          if (JSON.parse(user.value).wallet === sender) {
            setWallet(sender);
            setCurrentUser(JSON.parse(user.value));
          }
        }),
      );
  };

  const disconnect = () => {
    setLogin("");
    setPassword(null);
    setPort(0);
    setCurrentUser(null);
    setWallet(null);
    setBlockchainData([]);
    methods.port = 0;
    methods.sender = "";
    methods.password = "";
  };

  useEffect(() => {
    if (login && blockchainData.length > 0) {
      (async () => {
        await methods.load().then((res) => setBlockchainData(res));
      })();
    }
  }, [blockchainData]);

  const transactions = blockchainData?.filter((record) => {
    if (login) return record.key.startsWith("TRANSFER_MAPPING");
  });

  const users = blockchainData?.filter((record) => {
    if (login) return record.key.startsWith("USER_MAPPING");
  });

  const removeSymbols = (value) => {
    return value.replaceAll(/[{"}]/g, "").replaceAll(",", ",\n").replaceAll(":", ": ");
  };

  const values = {
    auth,
    blockchainData,
    setBlockchainData,
    transactions,
    removeSymbols,
    users,
    wallet,
    currentUser,
    login,
    password,
    port,
    disconnect,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
