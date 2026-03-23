import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const AcceptTransfer = () => {
  const handleAcceptTransfer = (e) => {
    e.preventDefault();
    methods.acceptTransfer(e.target[0].value);
    alert("Получено!");
  };

  return (
    <Card>
      <Form onSubmit={handleAcceptTransfer}>
        <FormLabel column="lg">Принять перевод</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="id" defaultValue="" />
        </FormGroup>
        <Button type="submit" className="w-75 mt-3">
          Принять
        </Button>
      </Form>
    </Card>
  );
};

export { AcceptTransfer };
