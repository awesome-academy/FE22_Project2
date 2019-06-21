import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavAdmin extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="mr-auto" href="/dashboard">Mandala</Navbar.Brand>
                <div className="notification_admin">
                    <i className="fas fa-bell"/>
                    <i className="fas fa-user"/>
                </div>
            </Navbar>
        );
    }
}

export default NavAdmin;