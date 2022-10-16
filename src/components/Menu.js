import React from 'react';
import {Navbar, Nav, NavItem, DropdownButton, NavDropdown, Form, Container, Button} from 'react-bootstrap';

export default class Menu extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav.Link href="/"><h4>Wish List</h4></Nav.Link>
          <Nav.Link href="/readbooks"><h4>Read Books</h4></Nav.Link>
        </Container>
      </Navbar>
    );
  }
}
