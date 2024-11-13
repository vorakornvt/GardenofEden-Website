import useAuth from "../../hooks/useAuth";
import { Navbar, Container, Col } from "react-bootstrap";
import NavLogo from "/src/assets/images2/Asset4real.png";
import * as styles from "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import HamburgerMenuAcc from "../common/HamburgerMenuAcc";

const Header = () => {
  const { user } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* Left Section: Conditional Link */}

        <Col xs="0">
          <Link className="text-dark" to={user ? "/store/products" : "/login"}>
            {" "}
            <RxHamburgerMenu size={18} as={Link} />
          </Link>
        </Col>

        {/* Center Section: Logo */}
        <Col className=" mx-auto">
          <Navbar.Brand as={Link} to="/">
            <img className={styles.logo} src={NavLogo} alt="LOGO" />
          </Navbar.Brand>
        </Col>

        {/* Right Section: Navigation Links */}
        <Col xs="auto" className="align-items-end">
          <HamburgerMenuAcc />
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
