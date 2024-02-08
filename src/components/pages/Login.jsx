import React from "react";
import Navbar from "../navbar/Navbar";
import Content from "../content/Content";
import Footer from "../footer/footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(result))
    }


    return (
        <>
            <Navbar>
                <button>Login</button>
            </Navbar>
            <Content>
                <Container onSubmit={handleSubmit}>
                    <Row>
                        <Col></Col>
                        <Col>
                            <div className="box">
                                <h2>Login</h2>
                                <p>Login menggunakan Gmail Anda.</p>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                                                <Form.Control type="email" placeholder="capella@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
                                                <Form.Control type="password" placeholder="Masukkan Password Anda" onChange={(e) => setPassword(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form>
                                                {['checkbox'].map((type) => (
                                                    <div key={`${type}`} className="mb-3">
                                                        <Form.Check
                                                            type={type}
                                                            id={`default-${type}`}
                                                            label={`Remember me`}
                                                        />
                                                    </div>
                                                ))}
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button variant="primary" onClick={handleSubmit}>Login</Button>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Content>
            <Footer />
        </>
    )
}

export default Login;