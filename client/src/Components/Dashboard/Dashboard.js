import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            registers: [],
            data: [],
            contacts: []
        }
    }

    logout = () => {
        localStorage.clear()
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("id"))[0]
        this.setState({ registers: data })
    }

    render() {
        // console.log(this.state.registers)
        const registers = this.state.registers;
        return (
            <div className="basetemp-container2">
                <h4>Dashboard</h4>
                <div>
                    <h5>Name: {this.state.registers.name}</h5>
                    <h5>Email: {this.state.registers.email}</h5>
                    {registers.contacts && registers.contacts.map(contacts => {
                        // console.log(this.state.registers.contacts) 
                    return <div key={contacts}><h5>Name: {contacts.name}</h5></div>;
          
        })}
                </div>
                <Link to='/'><Button className="addbtn button1" variant="primary" onClick={this.logout}>Logout</Button></Link>
                <Link to='/contacts'><Button className="addbtn button1" variant="primary">Create Contact</Button></Link>
            </div>
        );
    }
}

export default Dashboard;