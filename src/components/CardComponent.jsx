import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";

class CardComponent extends Component {
  render() {
    return (
      <Card key={this.props.id} style={{ width: "18rem", margin: "5px" }}>
        <Card.Img
          variant="top"
          src={this.props.image}
          className="imagesize15"
        />
        <Card.Body>
          <Card.Title>{this.props.images}</Card.Title>
          <Card.Text>{this.props.name}</Card.Text>
          <Button variant="success">{this.props.cat}</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default CardComponent;
