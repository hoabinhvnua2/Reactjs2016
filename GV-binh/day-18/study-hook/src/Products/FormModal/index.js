import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormModal = ({ show, close, isEdit, products, setProducts }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  
  const handleClose = () => {
    setProductName("");
    setQuantity(0);
    close();
  };

  const handleProductName = (e) => {
    const nameProduct = e.target.value;
    setProductName(nameProduct);
  };

  const handleChangeQuantity = (e) => {
    const productQuantity = e.target.value;
    setQuantity(productQuantity);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isEdit) {
      const result = products.map((p) =>
        p.id === isEdit.id ? { ...p, name: productName, quantity } : p
      );
      localStorage.setItem("products", JSON.stringify(result));
      setProducts(result);
      handleClose();
      return false;
    }
    const result = [
      ...products,
      {
        id: products.length + 1,
        name: productName,
        quantity,
      },
    ];
    localStorage.setItem("products", JSON.stringify(result));
    setProducts(result);
    handleClose();
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>{isEdit ? "Edit form" : "Add new form"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={isEdit?.name ? isEdit?.name : productName}
              type="text"
              placeholder="Name"
              name="firstName"
              onChange={handleProductName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              value={isEdit?.name ? isEdit?.quantity : quantity}
              type="number"
              placeholder="Quantity"
              name="quantity"
              onChange={handleChangeQuantity}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Save"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
