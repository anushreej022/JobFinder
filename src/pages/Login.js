import axios from 'axios';
import React, { Component } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        
        axios.post("http://localhost:8080/user/login", {
            email,
            password,
        })
        .then((response) => {
            console.log(response.data);
            if (response.data.status === "ok") {
                alert("Login Successful! Welcome " + response.data.email);
                
                    const date = new Date();
                    date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
                    const expires = "expires=" + date.toUTCString();
                    document.cookie = "token" + "=" + response.data.data + ";" + expires + ";path=/";
                    console.log(response.data.data);
            
                
                window.location.href = "./about";
            }
            else {
                alert(response.data.status);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">LOGIN</h2>
                                        <p className=" mb-5">Please enter your email and password to login</p>
                                        <div className="mb-3">
                                            <Form onSubmit={this.handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicCheckbox"
                                                >
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button variant="primary" type="submit">
                                                        Login
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
