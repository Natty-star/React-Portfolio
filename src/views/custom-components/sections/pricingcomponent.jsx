/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const PricingComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">PROFESSIONAL EXPERIENCE</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pricing8 spacer b-t">
        <Container>
          {/* <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">PROFESSIONAL EXPERIENCE</h2>
              <h6 className="subtitle">
                We offer 100% satisafaction and Money back Guarantee
              </h6>
            </Col>
          </Row> */}
          <Row className="m-t-40">
            <Col md="4" className="ms-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>LexisNexis, San Jose, California ∙ 2023-current </h5>
                  <h5>Junior Software Engineer (2019-2020)</h5>
                  <p className="m-t-20">
                    Building a data pipeline, working with the data
                    infrastructure team, Build fast scalable and fault-tolerant
                    data infrastructure for big data and streaming
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ms-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>
                    TAK TECHNOLOGIES PLC, Addis Ababa, Ethiopia ∙ 2019-2022
                  </h5>

                  <h5>Senior Software Engineer (2020-2022)</h5>
                  {/* <h6 className="font-light font-14">YEARLY</h6> */}
                  <p className="m-t-20">
                    Led projects through all phases of the software development
                    life cycle Designed and Implemented an automated online
                    payment system. Designed Resilient and scalable Web API
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ms-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>
                    TAK TECHNOLOGIES PLC, Addis Ababa, Ethiopia ∙ 2019-2022
                  </h5>
                  <h5>Junior Software Engineer (2019-2020)</h5>
                  {/* <h6 className="font-light font-14">YEARLY</h6> */}
                  <p className="m-t-20">
                    Contributed to the development of frontend, backend, and
                    user interface. Increased efficiency of data recording and
                    accessibility. Established 2-factor authentication security.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PricingComponent;
