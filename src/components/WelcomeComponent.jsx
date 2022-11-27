import { Component } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

class WelcomeComponent extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Strive Books</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}
export default WelcomeComponent;
