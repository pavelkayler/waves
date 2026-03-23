import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const Registration = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    methods.registration(e.target[0].value, e.target[1].value);
    alert("Вы зарегистрированы!");
  };

  return (
    <Card>
      <Form onSubmit={handleRegistration}>
        <FormLabel column="sm">Регистрация в почтовой системе</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="name" defaultValue="" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="homeAddress" defaultValue="" />
        </FormGroup>
        <Button type="submit">Зарегистрироваться</Button>
      </Form>
    </Card>
  );
};

export { Registration };
