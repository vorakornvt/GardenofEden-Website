import useAuth from "../../hooks/useAuth";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import NavLogo from "/src/assets/images2/Asset4real.png";
import * as styles from "./Header.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from "react-bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdDashboard, MdLogin, MdLogout } from "react-icons/md"; // icons for dashboard and logout
import { Link, useLocation } from "react-router-dom";
import "@radix-ui/themes/styles.css";

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Row className="mx-auto w-100 align-items-center">
        {/* Center Section with Navigation Links */}
        <Col xs={4} className="d-flex justify-content-start">
          <Nav className="p-2">
            <Nav.Link as={Link} to="/wishlist" className={styles.navLink}>
              <IoMdHeartEmpty /> {/* Wishlist icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={styles.navLink}>
              <HiOutlineShoppingBag /> {/* Shopping cart icon */}
            </Nav.Link>
          </Nav>
        </Col>

        {/* Left Section with Logo */}
        <Col xs={4} className="d-flex justify-content-center">
          <Navbar.Brand as={Link} to="/">
            <img className={styles.logo} src={NavLogo} alt="LOGO" />
          </Navbar.Brand>
        </Col>

        {/* Right Section with Authentication Links */}
        <Col xs={4} className="d-flex justify-content-end">
          <Nav className="p-2">
            {!user ? (
              <>
                {/* Sign In and Register links when not logged in */}
                <Nav.Link as={Link} to="/login" className={styles.navLink}>
                  <Button
                    variant={
                      location.pathname === "/login" ? "dark" : "outline-dark"
                    }
                  >
                    <MdLogin /> Sign In
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className={styles.navLink}>
                  <Button
                    variant={
                      location.pathname === "/signup" ? "dark" : "outline-dark"
                    }
                  >
                    Register
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                {/* Dashboard and Logout links when logged in */}
                <Nav.Link as={Link} to="/dashboard" className={styles.navLink}>
                  <Button
                    variant={
                      location.pathname === "/dashboard"
                        ? "dark"
                        : "outline-dark"
                    }
                  >
                    <MdDashboard /> Dashboard
                  </Button>
                </Nav.Link>
                <Nav.Link onClick={logout} className={styles.navLink}>
                  <Button variant="outline-dark">
                    <MdLogout /> Logout
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
