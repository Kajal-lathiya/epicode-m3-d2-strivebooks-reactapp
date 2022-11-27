import { Component } from "react";
import {  Navbar,Container, Nav} from "react-bootstrap";
class MyNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}
export default MyNav; 