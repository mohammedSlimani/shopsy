import React, { Component } from 'react'
import SignIn from './SignIn';
import { Container, Row, Col } from 'react-bootstrap';
import SignUp  from './SingUp';

export class SignInUp extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}><SignIn /></Col>
                        <Col md={6}><SignUp /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SignInUp
