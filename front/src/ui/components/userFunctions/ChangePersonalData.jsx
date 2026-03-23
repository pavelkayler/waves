import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const ChangePersonalData = () => {
  const handleChangePersonalData = (e) => {
    e.preventDefault();
    methods.changePersonalData(e.target[0].value, e.target[1].value);
    alert("Вы изменили свои данные!");
  };

  return (
    <Card>
      <Form onSubmit={handleChangePersonalData}>
        <FormLabel column="sm">Изменить личные данные</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="name" defaultValue="" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="homeAddress" defaultValue="" />
        </FormGroup>
        <Button type="submit">Изменить</Button>
      </Form>
    </Card>
  );
};

export { ChangePersonalData };
