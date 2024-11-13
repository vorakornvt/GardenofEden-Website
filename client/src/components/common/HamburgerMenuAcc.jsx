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
  const handleShow = () => setShow(true);

  // Get first letter of first name and last name for avatar
  const getAvatarInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <>
      <Button variant="light" onClick={handleShow} className={styles.HamBar}>
        <IoPersonOutline size={18} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="l"
        className={styles.Modal}
      >
        <Modal.Header>
          {user ? (
            <div className="mx-auto text-center ">
              <div className={styles.Avatar}>
                <div className={styles.AvatarCircle}>
                  {getAvatarInitials(user.firstName, user.lastName)}
                </div>
                <h5 className={styles.WelcomeText}>
                  Welcome {` ${user.firstName}, ${user.lastName}`}
                </h5>
                <p className={styles.UserEmail}>{user.email}</p>
              </div>
              <Button
                variant="secondary"
                className=""
                onClick={() => {
                  logout();
                  handleClose();
                }}
              >
                LOGOUT
              </Button>
            </div>
          ) : (
            <div className="text-center mx-auto">
              <h5>ACCOUNT ACCESS</h5>
              <p>Please login for a full experience</p>
            </div>
          )}
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
            <div className="text-center col">
              <Button
                className={stylesTwo.BtnMain}
                as={Link}
                to="/dashboard"
                variant="dark"
                onClick={handleClose}
              >
                DASHBOARD
              </Button>
              <div></div>
              <Button
                className={stylesTwo.BtnMain}
                as={Link}
                to="/store/products"
                variant="dark"
                onClick={handleClose}
              >
                PRODUCT
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HamburgerMenuAcc;
