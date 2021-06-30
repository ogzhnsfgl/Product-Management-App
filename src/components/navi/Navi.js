import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" info expand="md">
        <NavbarBrand>
          {" "}
          <Link to={"/"}>Yüzyıllık Satış</Link>{" "}
        </NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavLink>
            {" "}
            <Link to="/saveproduct">Ürün Ekle</Link>{" "}
          </NavLink>
          <CartSummary></CartSummary>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
