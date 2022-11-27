import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import fantasyArray from "../fantasy.json";
import historyArray from "../history.json";
import CardComponent from "./CardComponent";

class LatestRelease extends Component {
  render() {
    return (
      <Container md="auto">
        <h3>fantasy list</h3>
        <Row>
          {fantasyArray.map(({ asin, title, img, price, category }) => (
            <CardComponent
              id={asin}
              name={title}
              image={img}
              prices={price}
              cat={category}
            />
          ))}
        </Row>
        <h3>History list</h3>
        <Row>
          {historyArray.map(({ asin, title, img, price, category }) => (
            <CardComponent
              id={asin}
              name={title}
              image={img}
              prices={price}
              cat={category}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
