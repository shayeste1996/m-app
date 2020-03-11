import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap";
import styled from "styled-components";
const MyNavbar = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text>محصولات</Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/favourits" style={{ textDecoration: "none" }}>
              <Badge pill variant="light">
                9
              </Badge>
              <Text> لیست علاقه مندی ها</Text>
            </Link>
          </Nav>
          <Nav>
            <Link to="/ShoppingCart" style={{ textDecoration: "none" }}>
              <Badge pill variant="light">
                9
              </Badge>
              <Text> سبد خرید </Text>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};
export default MyNavbar;
const Text = styled.span`
  color: white;
  font-size: 2rem;
  &:hover {
    text-decoration: none;
  }
`;
