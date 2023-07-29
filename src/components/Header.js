import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

function Header() {
  const { carts } = useSelector((state) => state.products);
  return (
    <>

    <Navbar fixed='top' expand="lg" className="bg-gradient-to-b from-blue-900 to-blue-700">
      <Container>
        <Navbar.Brand href="#home" className='font-bold text-white'>Shopping Cart</Navbar.Brand>
        <Link to={"/cart"}>
        <Button variant='danger'><GrCart className=''/>{carts.length}
        </Button>
        </Link>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header;


