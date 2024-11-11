import useAuth from "../../hooks/useAuth";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import NavLogo from "/src/assets/images2/Asset4real.png";
import * as styles from "./Header.css";

import { Link, useLocation } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import HamburgerMenu from "../common/HamburgerMenu";
import HamburgerMenuAcc from "../common/HamburgerMenuAcc";

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container fluid>
        <Row className="w-100 mx-auto text-center align-items-center justify-content-between">
          {/* Left Section: Hamburger Menu */}
          <Col xs="auto">
            <HamburgerMenu />
          </Col>

          {/* Center Section: Logo */}
          <Col className="d-flex justify-content-center">
            <Navbar.Brand as={Link} to="/">
              <img className={styles.logo} src={NavLogo} alt="LOGO" />
            </Navbar.Brand>
          </Col>

          {/* Right Section: Navigation Links */}
          <Col xs="auto" className="align-items-end">
            <HamburgerMenuAcc />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
