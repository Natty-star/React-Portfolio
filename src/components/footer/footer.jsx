/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Reach Me</h5>
            <p></p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>Phone : +641 819 2347</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :{" "}
              <a href="#" className="link">
                natnael.gudeta@miu.edu
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <a
                href="https://www.linkedin.com/in/natnael-teshome-gudeta/"
                className="link"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Natty-star" className="link">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
