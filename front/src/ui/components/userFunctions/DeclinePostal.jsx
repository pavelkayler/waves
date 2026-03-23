import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel } from "react-bootstrap";

const DeclinePostal = () => {
  const handleDeclinePostal = (e) => {
    e.preventDefault();
    methods.declinePostal(e.target[0].value);
    alert("Отказано!");
  };

  return (
    <Card>
      <Form onSubmit={handleDeclinePostal}>
        <FormLabel column="sm">Отклонить получение посылки</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="trackingNumber" defaultValue="" />
        </FormGroup>
        <Button type="submit">Отклонить</Button>
      </Form>
    </Card>
  );
};

export { DeclinePostal };
