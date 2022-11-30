import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAddItineraryMutation } from "./app/itineraryApi";
import { preventDefault } from "./app/utils";


const ItineraryFormDev = () => {
  const [ addItinerary, { data }] = useAddItineraryMutation();

  // this is a temporary placeholder for either a
  // redirect using useNavigate or a better looking success alert.
  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully created a new itinerary. Please visit your
          itineraries page if you would like to see the details.
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(addItinerary, (e) => e.target)}
      >
        <Container>
          <Row>
            <Col sm={8}>
              <Card
                className="item-border"
                border="light"
                style={{ width: "40rem" }}
              >
                <Card.Title className="centered">
                  Create an Itinerary
                </Card.Title>
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Label>Itinerary Name</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter itinerary name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label> Start Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="start_date"
                        type="date"
                        placeholder="Start Date"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label> End Date </Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="end_date"
                        type="date"
                        placeholder="End Date"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Location </Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="location"
                        as="textarea"
                        label="Location"
                      />
                    </Col>
                  </Row>
                  <Button variant="outline-success" type="submit">
                    Create Itinerary
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default ItineraryFormDev;