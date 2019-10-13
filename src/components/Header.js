import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (

  <Navbar color="dark" light expand="md" >
  <NavbarBrand href="/">HOME</NavbarBrand>
  
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/list">
      Lista

        </NavLink>
      </NavItem>
      

      <NavItem>
        <NavLink href="/upload">Zgłoś zgubę</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
      <NavItem>
        <NavLink tag={Link} to="/map">Mapa</NavLink>
      </NavItem>

      </UncontrolledDropdown>
    </Nav>
  
</Navbar>

);

export default Header;