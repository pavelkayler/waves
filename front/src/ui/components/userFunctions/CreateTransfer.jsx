import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const CreateTransfer = () => {
  const handleCreateMoneyTransfer = async (e) => {
    e.preventDefault();
    await methods.createMoneyTransfer(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value).then((res) => alert(res + "Перевод отправлен!"));
  };

  return (
    <Card>
      <Form onSubmit={handleCreateMoneyTransfer}>
        <FormLabel column="sm">Создать перевод</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="sender" defaultValue="" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="receiver" defaultValue="" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="number" placeholder="value" defaultValue="" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="number" placeholder="timeLeft" defaultValue="" />
        </FormGroup>
        <Button type="submit">Создать перевод</Button>
      </Form>
    </Card>
  );
};

export { CreateTransfer };
