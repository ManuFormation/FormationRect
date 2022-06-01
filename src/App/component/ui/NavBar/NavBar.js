import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => (
  <div className={styles.Navbar} data-testid="Navbar">
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/editor">
            <Nav.Link>new Meme</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/thumbail">
            <Nav.Link>Thumbail</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/editor/0">
            <Nav.Link>editv id 0</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default NavBar;
