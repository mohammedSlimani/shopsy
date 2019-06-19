import React, { Component } from 'react'
import SignIn from './SignIn/SignIn';
import { Container, Row, Col } from 'react-bootstrap';

export class SignInUp extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col><SignIn /></Col>
                        <Col><SignIn /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SignInUp
