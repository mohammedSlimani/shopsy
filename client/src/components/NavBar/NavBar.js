import React, { Component } from 'react'
import logo from '../../assets/logo-shop.png';
import { Navbar, Button } from 'react-bootstrap';


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
                    <Button onClick={this.props.toggelShowAll} >All shops</Button>
                    <Button onClick = {this.props.toggelShowFav} >Favourite</Button>
                </Navbar>
            </>
        )
    }
}

export default NavBar
