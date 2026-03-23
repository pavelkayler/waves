import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel, FormCheck } from "react-bootstrap";

const ChangeIdentifier = () => {
  const handleChangeIdentifier = (e) => {
    e.preventDefault();
    methods.changeIdentifier(e.target[0].value, e.target[1].value);
    alert("Применено!");
  };

  return (
    <Card>
      <Form onSubmit={handleChangeIdentifier}>
        <FormLabel column="sm">Изменить идентификатор сотрудника</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="wallet" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="identifier" />
        </FormGroup>
        <Button type="submit">Применить</Button>
      </Form>
    </Card>
  );
};

export { ChangeIdentifier };
