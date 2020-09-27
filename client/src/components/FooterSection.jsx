import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const FooterSection = (props) => {
  return (
    <div>
      <Nav className="bg-secondary d-flex justify-content-center align-items-end">
        <NavItem>
          <NavLink className="text-white" href="#">Log In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="#">Sign In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="#">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="#">Rules</NavLink>
        </NavItem>
      </Nav>
    
    </div>
  );
}

export default FooterSection;