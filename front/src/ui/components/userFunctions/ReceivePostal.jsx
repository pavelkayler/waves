import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const ReceivePostal = () => {
  const handleReceivePostal = (e) => {
    e.preventDefault();
    methods.receivePostal(e.target[0].value);
    alert("Получено!");
  };

  return (
    <Card>
      <Form onSubmit={handleReceivePostal}>
        <FormLabel column="sm">Получить посылку</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="trackingNumber" defaultValue="" />
        </FormGroup>
        <Button type="submit">Отправить</Button>
      </Form>
    </Card>
  );
};

export { ReceivePostal };
