import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  ModalFooter,
  Form,
  FormGroup,
} from "reactstrap";

export default function FormComponent({
  visible,
  setVisible,
  setProducts,
  products,
}) {
  const [formValue, setFormValue] = useState({
    src: "",
    productName: "",
    productPrice: Number(""),
    productFeature: "",
  });
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // console.log(formValue);

  const cancel = () => {
    setVisible(false);
  };

  const save = () => {
    products.length === 0
      ? setProducts([
          {
            src: formValue.src,
            productName: formValue.productName,
            productPrice: formValue.productPrice,
            productFeature: formValue.productFeature,
            id: uuidv4(),
          },
        ])
      : setProducts([
          ...products,
          {
            src: formValue.src,
            productName: formValue.productName,
            productPrice: formValue.productPrice,
            productFeature: formValue.productFeature,
            id: uuidv4(),
          },
        ]);
        setVisible(false);
  };

  return (
    <div>
      <Modal fade={false} isOpen={visible}>
        <ModalHeader>Product Add</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label>product name:</label>
              <Input type="text" name="productName" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <label>product price:</label>
              <Input
                type="number"
                name="productPrice"
                onChange={handleChange}
              />
            </FormGroup>
            <label>product feature:</label>
            <Input type="text" name="productFeature" onChange={handleChange} />
            <FormGroup>
              <label>product src:</label>
              <Input type="file" name="src" onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={save}>
            Add
          </Button>{" "}
          <Button color="danger" onClick={cancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
