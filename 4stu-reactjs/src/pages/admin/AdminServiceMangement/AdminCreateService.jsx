import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

function AdminCreateService() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newService, setNewService] = useState({
    name: '',
    desc: '',
    time: '',
    price: '',
    tag: '',
    image: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://localhost:7088/api/ServiceManagements', newService)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    handleClose();
  };

  return (
    <>
      <button class="button-modal" onClick={handleShow}>
        Add Service
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setNewService({ ...newService, desc: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNewService({ ...newService, time: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNewService({ ...newService, tag: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setNewService({ ...newService, image: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button class="button-modal" onClick={handleClose}>
            Close
          </button>
          <button class="button-modal" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminCreateService;
