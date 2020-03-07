import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
const MyNavbar = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">محصولات</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <Link to="/favourits">
                <Badge pill variant="light">
                  9
                </Badge>
                <span> لیست علاقه مندی ها</span>
              </Link>
          </Nav>
          <Nav>
              <Link to="/ShoppingCart">
                <Badge pill variant="light">
                  9
                </Badge>
                <span> سبد خرید </span>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};
export default MyNavbar;
