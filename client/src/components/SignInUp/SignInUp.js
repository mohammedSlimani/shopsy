import React, { Component } from 'react'
import SignIn from './SignIn';
import { Container, Row, Col } from 'react-bootstrap';
import SignUp from './SingUp';

export class SignInUp extends Component {
    constructor(props){
        super(props);
        console.log("SingInUp props",props);
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}><SignIn
                            auth={this.props.auth}
                            loadingOn={this.props.loadingOn}
                            loadingOff={this.props.loadingOff} /></Col>
                        <Col md={6}><SignUp auth={this.props.auth}
                            loadingOn={this.props.loadingOn}
                            loadingOff={this.props.loadingOff}
                        /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SignInUp
