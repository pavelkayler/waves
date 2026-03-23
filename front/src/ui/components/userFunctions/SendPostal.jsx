import methods from "../../../core/methods/methods.js";
import { Button, Form, FormGroup, FormControl, Card, FormLabel, FormCheck } from "react-bootstrap";

const SendPostal = () => {
  const handleSendPostal = (e) => {
    e.preventDefault();
    methods.sendPostal(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value, e.target[8].value);
    alert("Отправлено!");
  };

  return (
    <Card>
      <Form onSubmit={handleSendPostal}>
        <h5>Отправить посылку</h5>
        <FormLabel column="sm">officeIndex</FormLabel>
        <FormControl required type="number" placeholder="officeIndex" defaultValue="123123" />
        <FormLabel column="sm">receiver</FormLabel>
        <FormControl required type="text" placeholder="receiver" defaultValue="3NwDX3Z3XJjrstKbBuBANBtvreYuseByHYA" />
        <FormLabel column="sm">weight</FormLabel>
        <FormControl required type="number" placeholder="weight" defaultValue="1" />
        <FormLabel column="sm">declaredValue</FormLabel>
        <FormControl required type="number" placeholder="declaredValue" defaultValue="1" />
        <FormLabel column="sm">postalType</FormLabel>
        <FormControl required type="number" placeholder="postalType" defaultValue="1" />
        <FormLabel column="sm">postalClass</FormLabel>
        <FormControl required type="number" placeholder="postalClass" defaultValue="1" />
        <FormLabel column="sm">startAddress</FormLabel>
        <FormControl required type="text" placeholder="startAddress" defaultValue="Home" />
        <FormLabel column="sm">endAddress</FormLabel>
        <FormControl required type="text" placeholder="endAddress" defaultValue="No Home" />
        <Button type="submit">Отправить</Button>
      </Form>
    </Card>
  );
};

export { SendPostal };
