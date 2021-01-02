import React from "react";
import { Button, Form, Icon, Message } from "semantic-ui-react";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <div id="contact-container">
        <Message
          attached
          header="Welcome to my site!"
          content="Fill out the form below to contact my personal email address."
        />
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First Name"
              placeholder="First "
              type="text"
            />
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last "
              type="text"
            />
          </Form.Group>
          <Form.Input label="Company" placeholder="" type="text" />
          <Form.Input label="Message" type="Type here..." />
          <Button
            color="violet"
            style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
            hred=""
          >
            Submit
          </Button>
        </Form>
        <Message attached="bottom" warning color="violet">
          <Icon name="help" />
          Already emailed?&nbsp;<a href="/">Click here</a>
          &nbsp;instead.
        </Message>
      </div>
    </div>
  );
}
