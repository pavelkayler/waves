import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../core/context/Context.jsx";

const Authorization = () => {
  const { auth, wallet } = useContext(Context);

  const handleAuth = async (e) => {
    e.preventDefault();
    return await auth(e.target[0].value, e.target[1].value, e.target[2].value).then(() => alert("Вы авторизованы! \nwallet: " + wallet));
  };
  return (
    <Card>
      <Form onSubmit={handleAuth}>
        <FormLabel column="sm">Авторизация в блокчейн систему</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="Blockchain Address" defaultValue="3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="Password" defaultValue="iLZEoY8elvORbPXrwhSaLQ" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="number" placeholder="Port" defaultValue="6882" />
        </FormGroup>
        <Button type="submit">Авторизоваться</Button>
      </Form>
    </Card>
  );
};

export { Authorization };
