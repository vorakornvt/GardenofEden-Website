import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

import * as styles from "./HamburgerMenuAcc.css";

import { IoPersonOutline } from "react-icons/io5";
import * as stylesTwo from "./Btn.css";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
// import DecorButtom from "../../assets/images2/Asset4real.png";

function HamburgerMenuAcc() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        variant="light"
        ref={target}
        onClick={() => setShow(!show)}
        className={styles.HamBar}
      >
        <IoPersonOutline />
      </Button>
      <Overlay  target={target.current} show={show} placement="right">
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
      </Overlay>
    </>
  );
}

export default HamburgerMenuAcc;
