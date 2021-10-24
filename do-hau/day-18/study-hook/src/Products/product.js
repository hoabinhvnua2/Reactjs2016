import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./style.scss";
import FormModal from "./FormModal";

const Products = () => {
  const store = localStorage.getItem("products")?.length
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const [products, setProducts] = useState(store);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    setIsEdit(null);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    const result = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(result));
    setProducts(result);
  };

  const handleEditProduct = (item) => {
    setIsEdit(item);
    handleShow();
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchResult = () => {
    console.log(search);
    if (!search) {
      setProducts(store);
      return false;
    }
    const searchProduct = search.toLowerCase();
    const result = products.filter(
      (p) => p.name.toLowerCase().indexOf(searchProduct) > -1
    );
    setProducts(result);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search product name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChangeSearch}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearchResult}
        >
          Tìm kiếm
        </Button>
      </InputGroup>
      <Button onClick={handleShow} variant="primary">
        Add new
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!products.length && (
            <tr>
              <td colSpan="4">Không có dữ liệu</td>
            </tr>
          )}

          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleEditProduct(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ml-3"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <FormModal
        show={show}
        close={handleClose}
        isEdit={isEdit}
        products={products}
        setProducts={(product) => setProducts(product)}
      />
    </div>
  );
};

export default Products;
