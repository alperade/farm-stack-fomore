import SearchTabs from "./tabs";
import ItineraryList from "./Itinerary";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import SearchBar from "./TestSearchBar";

function Main() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <SearchBar/>
          <div className="section-border">
            <SearchTabs/>
          </div>
        </Col>
        <Col sm={4}>
          <div className="section-border">
            <ItineraryList/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
