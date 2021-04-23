import React from "react";
import { useFeedBack } from "./Hooks/useFeedBack";
import { Form, MiniFlex, FormGroup, Button } from "./Styles";

const FeedBackForm = () => {
    const [values, handleChange] = useFeedBack({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const feedBack = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
    };

    const addForm = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, phoneNumber, message } = feedBack;
        if ((!firstName, !lastName, !email, !phoneNumber, !message))
            return alert("Empty fields not allowed");
    };
    return (
        <Form onSubmit={addForm} method="POST">
            <MiniFlex>
                <FormGroup>

                    <label htmlFor="firstName">
                        First Name
                </label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        placeholder="e.g John"
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="lastName">
                        Last Name
                </label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        placeholder="e.g Doe"
                    />
                </FormGroup>
            </MiniFlex>
            <MiniFlex>
                <FormGroup>
                    <label htmlFor="email">
                        Email
                </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="e.g johndoe@email.com"
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="phoneNumber">
                        Phone Number
                </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        placeholder="e.g 08023456789"
                    />
                </FormGroup>
            </MiniFlex>
            <label htmlFor="message">
                Message  </label>

            <textarea id="message" placeholder="Message" cols="30" rows="10"></textarea>

            <Button type="submit">Send Message</Button>
        </Form>
    );
};

export default FeedBackForm;
