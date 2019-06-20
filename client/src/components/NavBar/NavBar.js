import React, { Component } from 'react'
import logo from '../../assets/logo-shop.png';
import { Navbar } from 'react-bootstrap';


export class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt="Shop logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {'Shopsy'}
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}

export default NavBar
