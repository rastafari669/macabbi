import React from 'react';
import {Navbar,Nav } from 'react-bootstrap';
import macab from '../images/macab.png';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
    <Navbar bg="dark" expand="lg" className='navbar'>
  
 <Link to='/'> <img src={macab} alt="logo" className='logo'/></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto links">
      <Link to='/' className='link' style={{color:'white'}}>Register</Link>
      <Link to='users' className='link' style={{color:'white'}}>Users</Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</>
    )
}

export default Navigation
