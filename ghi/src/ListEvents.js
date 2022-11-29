import React from "react";
import { useSelector } from "react-redux";
import { useGetEventsQuery } from "./app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

export function Events() {
  const search = useSelector((state) => state);
  const { data, isLoading } = useGetEventsQuery(search.search);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {data.map((event) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
            key={event.image_url}
          >
            <Container>
              <Row>
                <Col>
                  <Card.Img className="card-image" src={event.image_url} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Col sm={2}>
                      <NavLink style={{ textAlign: "right", color: "#FA7F08" }}>
                        &#10010;
                      </NavLink>
                    </Col>
                    <Card.Text>{event.location}</Card.Text>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        );
      })}
    </div>
  );
}

export default Events;
