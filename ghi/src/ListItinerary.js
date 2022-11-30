import { useGetItinerariesQuery } from "./app/itineraryApi";
import ErrorNotification from "./ErrorNotification";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Itineraries() {
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  // console.log({ data });

  return (
    <div>
      {data.itineraries.map((itinerary) => {
        console.log(itinerary);
        return (
          <Card
            key={itinerary.id}
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
          >
            <Card.Header as="h5">{itinerary.name}</Card.Header>
            <Card.Body>
              <Card.Title>{itinerary.location}</Card.Title>
              <Card.Text>
                {new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                {new Date(itinerary.end_date).toLocaleDateString()}
              </Card.Text>
              <Button variant="outline-primary">Go to Itinerary</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Itineraries;