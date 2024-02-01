import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    axios
      .post(
        "https://mc891wla21.execute-api.us-east-1.amazonaws.com/prod/createContact",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Origin: "https://www.natnaelgudeta.com/",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact Me</h1>
              <h6 className="subtitle">Reach out to me by filling the form</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Container>
          <Row>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Reach me</h4>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              placeholder="name"
                              name="name"
                              onChange={handleChange}
                              Value={formData.name}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="email"
                              placeholder="email"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="message"
                              placeholder="message"
                              onChange={handleChange}
                              value={formData.message}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              SUBMIT <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactComponent;
