import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLogin: false,
            registers: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        axios
            .get(`http://localhost:5000/registers?email=${this.state.email}&&password=${this.state.password}`)
            .then(response => {
                if (response.data.length > 0) {  
                localStorage.setItem("id", JSON.stringify(response.data)); this.setState({ isLogin: true }) }
                // console.log(response.data)
            })

            .catch(error => {
                console.log(error)
            })
        this.setState({ email: '', password: '' })
    }

    render() {
        if (localStorage.getItem("id")!==null) {
            return <Redirect to="/dashboard" />
        }
        const { email, password } = this.state
        return (
            <div className="basetemp-container1">
                <div className="col-md-6 col-md-offset-2">
                    <Card style={{ width: '30rem' }} bg="light">
                        <h5><Card.Header style={{ color: 'blue'}}>Login Page</Card.Header></h5>
                        <Card.Body>
                            <Form onSubmit={this.submitHandler}>
                                <Form.Group controlId="formBasicStart">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={email} onChange={this.changeHandler} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicEnd">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={password} onChange={this.changeHandler} required />
                                </Form.Group>
                                <Button className="addbtn button1" variant="primary" type="submit">Login</Button>
                                <Link to='/registration'><Button className="addbtn button1" variant="primary">Registration</Button></Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;