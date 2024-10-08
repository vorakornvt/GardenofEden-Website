import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import * as styles from "./HamburgerMenuAcc.css";
import Row from "react-bootstrap/Row";
import { IoPersonOutline } from "react-icons/io5";
import * as stylesTwo from "./Btn.css";
import { Link } from "react-router-dom";
import DecorButtom from "../../assets/images2/Asset3real.png";

function HamburgerMenuAcc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className={styles.HamBar}>
        <IoPersonOutline />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className={styles.HamBarText}>
          YOUR ACCOUNT
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="gap-3 h-75">
            {" "}
            <Button
              className={stylesTwo.BtnMain}
              as={Link}
              to="/signup"
              variant="dark"
            >
              Register
            </Button>
            <Button
              className={stylesTwo.BtnMain}
              as={Link}
              to="/login"
              variant="dark"
            >
              Login
            </Button>
          </Row>
          <Row>
            <img className="mx-auto w-25 mt-5" src={DecorButtom} alt="LOGO" />
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenuAcc;
