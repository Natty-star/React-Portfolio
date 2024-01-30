/* eslint-disable */
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";

const Header = () => {
  const [isOpen] = useState(false);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            ></Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
