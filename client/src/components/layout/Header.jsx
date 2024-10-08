import useAuth from "../../hooks/useAuth";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import NavLogo from "/src/assets/images2/Asset9real.png";
import * as styles from "./Header.css";
import HamburgerMenu from "../../components/common/HamburgerMenu";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import HamburgerMenuAcc from "../common/HamburgerMenuAcc";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Row className="mx-auto w-100 align-items-center">
        <Col xs={4} className="">
          <Nav className={styles.navleft}>
            <Nav.Link>
              <HamburgerMenu className={styles.navLink} />
            </Nav.Link>
          </Nav>
        </Col>

        <Col xs={4} className="d-flex justify-content-center">
          <Navbar.Brand href="/">
            <img className={styles.logo} src={NavLogo} alt="LOGO" />
          </Navbar.Brand>
        </Col>

        <Col xs={4} className="d-flex justify-content-end">
          <Nav className="p-2 ml-auto">
            <Nav.Link className={styles.navLink} as={Link} to="/wishlist">
              <IoMdHeartEmpty />
            </Nav.Link>{" "}
            <Nav.Link>
              <HamburgerMenuAcc className={styles.navLink} />
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/cart">
              <HiOutlineShoppingBag />
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
