import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel, FormCheck } from "react-bootstrap";

const AddOrRemovePostalWorker = () => {
  const handleAddOrRemovePostalWorker = (e) => {
    e.preventDefault();
    methods.addOrRemovePostalWorker(e.target[0].value, e.target[1].checked, e.target[2].value, e.target[3].value);
    alert("Применено!");
  };

  return (
    <Card>
      <Form onSubmit={handleAddOrRemovePostalWorker}>
        <FormLabel column="sm">Добавить или удалить работника</FormLabel>
        <FormGroup>
          <FormControl required type="text" placeholder="wallet" />
        </FormGroup>
        <FormGroup>
          <FormCheck type="switch" label="add" defaultChecked placeholder="homeAddress" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="jobPlace" />
        </FormGroup>
        <FormGroup>
          <FormControl required type="text" placeholder="identifier" />
        </FormGroup>
        <Button type="submit">Применить</Button>
      </Form>
    </Card>
  );
};

export { AddOrRemovePostalWorker };
