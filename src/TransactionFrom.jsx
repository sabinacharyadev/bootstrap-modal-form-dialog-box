import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const TransactionForm = () => {
  const initialData = {
    title: "",
    type: "expense",
    amount: "",
    date: new Date().toLocaleDateString().split("/").reverse().join("-"),
  };
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(initialData);
  const { title, type, amount, date } = form;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    handleClose();
    setForm(initialData);
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setForm(initialData);
  };
  return (
    <>
      <Button variant="primary" className="p-3 m-3" onClick={handleShow}>
        Add New Transaction
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleOnSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Transaction</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleOnChange}
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                name="type"
                value={type}
                onChange={handleOnChange}
                aria-label="Default select example"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="amount"
                value={amount}
                type="number"
                onChange={handleOnChange}
                placeholder="0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                max={new Date()
                  .toLocaleDateString()
                  .split("/")
                  .reverse()
                  .join("-")}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default TransactionForm;
