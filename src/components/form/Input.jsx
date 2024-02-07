import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap/Form';

const Input = () => {
  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="email" placeholder="capella@gmail.com" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password Anda" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Lengkap <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Anda" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Konfirmasi Password <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi Password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tanggal Lahir <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="date" placeholder="Masukkan Tanggal Lahir" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Saya menyetujui ketentuan dan pernyataan yang berlaku`}
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>
        <Row>
          <Button variant="primary">Register</Button>{' '}
        </Row>
      </Container>
    </Form>
  );
}

export default Input;