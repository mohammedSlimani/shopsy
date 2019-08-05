import React, { Component } from 'react'
import SignIn from './SignIn';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SignUp from './SingUp';

export class SignInUp extends Component {
    render() {
        //href="https://smed-united.glitch.me/api/users/auth/facebook">
        return (
            <>
                <Container>
                    <Row>
                        <Col md={12}>
                            <center>
                            <a href="https://github.com/mohammedSlimani/shopsy" target="_blank">See Source Code here</a>
                            </center>
                        </Col>
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
                        <Col >
                            <center>
                                <Button
                                    onClick={this.props.fb_auth}>
                                    CONTINUE WITH FACEBOOK
                                </Button>
                            </center>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SignInUp
