import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const CancelTransfer = () => {
  const handleCancelTransfer = (e) => {
    e.preventDefault();
    methods.cancelTransfer(e.target[0].value);
    alert("Получено!");
  };

  return (
    <Card>
      <Form onSubmit={handleCancelTransfer}>
        <FormLabel column="sm">Отклонить перевод</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="id" defaultValue="" />
        </FormGroup>
        <Button type="submit">Отказаться</Button>
      </Form>
    </Card>
  );
};

export { CancelTransfer };
