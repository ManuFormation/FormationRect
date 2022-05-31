import React,{ useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {Container,Nav, Navbar  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = (props) => (
  <div className={styles.Navbar} data-testid="Navbar">
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>   
  </div>
);



export default NavBar;
