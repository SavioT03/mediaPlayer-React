import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar style={{zIndex:'1'}} className="bg-primary sticky-top w-100">
    <Container>
      <Navbar.Brand >
        <Link style={{textDecoration:'none'}} to="/">
      <i class="fa-solid fa-headphones-simple"></i>{"  "}
        MBeats
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header