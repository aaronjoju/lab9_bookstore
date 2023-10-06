import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function BookCard({ key, data }) {
  // modal state variable
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const feedBack = document.getElementById('feedBack');
    const reName = /^[A-Za-z ]{3,}$/;
    const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name.value) {
      window.alert('Enter your name');
    } else if (!reName.test(name.value)) {
      window.alert('Invalid name');
    } else if (!reEmail.test(email.value)) {
      window.alert('Invalid Email');
    } else if (email.value === '') {
      window.alert('Please enter an email address');
    } else if (!feedBack.value) {
      window.alert('Write something about the book you have read');
    } else {
      window.alert('Thank you for your valuable review');
      handleClose();
    }
  };


  return (
    <>
      <Card key={key}>
        <Card.Img variant="top" src={data.book_image} />
        <Card.Body>

          <Card.Title>{data.title}</Card.Title>

          <Card.Text>
            {data.description}
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow()}>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Modal className='modal' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" id='name' />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id='email' placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" id='feedBack' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={validate}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default BookCard;