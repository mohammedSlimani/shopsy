import React, { Component } from 'react'
import SignIn from './SignIn';
import { Container, Row, Col } from 'react-bootstrap';
import SignUp from './SingUp';

export class SignInUp extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}>
                            <SignIn
                                auth={this.props.auth}
                            />
                        </Col>
                        <Col md={6}>
                            <SignUp 
                                auth={this.props.auth}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SignInUp
