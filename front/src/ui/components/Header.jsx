import { Link, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar, NavLink } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../core/context/Context.jsx";

const Header = () => {
  const { currentUser, login, port, disconnect } = useContext(Context);
  const navigate = useNavigate();

  const handleDisconnect = () => {
    disconnect();
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "mediumpurple" }} className="d-flex flex-column">
      <Navbar className="d-flex flex-row align-items-center justify-content-evenly">
        <Nav>
          <Link to="/" className="navbar-text">
            <h4>Профессионалы 2026</h4>
          </Link>
        </Nav>
        {login ? (
          <>
            <Nav>
              <Link to="/blockchain" className="navbar-text">
                <h4>Блокчейн</h4>
              </Link>
            </Nav>
            <Nav>
              <Link to="/lk" className="navbar-text">
                <h4>Личный кабинет</h4>
              </Link>
            </Nav>
            <Button variant="secondary" onClick={handleDisconnect}>
              Выйти
            </Button>
          </>
        ) : null}
      </Navbar>
      {login && <p className="text-center">{"login: " + login + ", port: " + port?.toString()}</p>}
    </div>
  );
};

export { Header };
