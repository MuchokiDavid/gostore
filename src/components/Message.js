import React from 'react'
import {Form, Container, Button} from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Message() {

  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

//Fuction to handle form submit 
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_606gfxv",
        "contact_form",
        {
          to_email: "dmmuchoki7@gmail.com",
          from_email: recipient,
          subject: subject,
          message: message,
        },
        "zbGmIzheDcOiAEx2S"
      )
      .then((response) => {
        alert("Email sent successfully!");
        //, response.status, response.text
      })
      .catch((error) => {
        alert("Email failed to send!, please try again");
        //, error
      });

    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className="">
        <Container>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
        </Container>
      </div>
      
      
    </div>
  )
}

export default Message