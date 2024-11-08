import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as styles from "./HamburgerMenuAcc.css";
import { IoPersonOutline } from "react-icons/io5";
import * as stylesTwo from "./Btn.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function HamburgerMenuAcc() {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();

  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className={styles.HamBar}
      >
        <IoPersonOutline />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className={styles.fontsize4x}>
            ACCOUNT ACCESS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          {!user ? (
            <>
              <Button
                className={stylesTwo.BtnMain}
                as={Link}
                to="/signup"
                variant="dark"
                onClick={handleClose}
              >
                REGISTER
              </Button>
              <Button
                className={stylesTwo.BtnMain}
                as={Link}
                to="/login"
                variant="dark"
                onClick={handleClose}
              >
                LOGIN
              </Button>
            </>
          ) : (
            <>
              <Button
                className={stylesTwo.BtnMain}
                as={Link}
                to="/dashboard"
                variant="dark"
                onClick={handleClose}
              >
                DASHBOARD
              </Button>
              <Button
                className={stylesTwo.BtnMain}
                variant="dark"
                onClick={() => {
                  logout();
                  handleClose();
                }}
              >
                LOGOUT
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HamburgerMenuAcc;
