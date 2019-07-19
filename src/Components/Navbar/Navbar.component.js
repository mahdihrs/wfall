import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button
} from '../../Constants/Bootstrap.Constants'

class NavbarComponent extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default NavbarComponent