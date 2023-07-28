import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

function Header() {
  const { carts } = useSelector((state) => state.products);
  return (
    <>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Link to={"/cart"}>
        <Button variant="danger">Cart : {carts.length}
        </Button>
        </Link>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header;


