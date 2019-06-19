import React, { Component } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik';
import { Container, InputGroup, Button, Form } from 'react-bootstrap';

const schema = yup.object({
    userName: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()
        .min(6, 'Seems a bit short'),
})


export class SignIn extends Component {
    login() {
        console.log('loggin you in');
    }

    render() {
        return (
            <Formik
                validationSchema={schema}
                onSubmit={this.login}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                }) => (
                        <Container>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="validationFormikUserName">
                                    <Form.Label>userName</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="user@company.com"
                                            aria-describedby="inputGroupPrepend"
                                            name="userName"
                                            value={values.userName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.userName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.userName}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="validationFormikPassword">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            aria-describedby="inputGroupPrepend"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={!!errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Button type="submit">Login</Button>
                            </Form>
                        </Container>
                    )}


            </Formik>
        )
    }
}

export default SignIn
