import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Input = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5173/register', {name, email, password})
  .then(result => {console.log(result)
    navigate('/login')
  })
    .catch(err => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="email" placeholder="capella@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password Anda" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Lengkap <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Anda" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Konfirmasi Password <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi Password" onChange={(e) => setPassword(e.target.value)} />
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
          <Button variant="primary">Register</Button>
        </Row>
      </Container>
    </Form>
  );
}

export default Input;