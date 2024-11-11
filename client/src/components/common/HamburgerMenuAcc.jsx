import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
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

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={styles.OffCanvas}
      >
        <Offcanvas.Header>
          {user ? (
            <div className="mx-auto ">
              <div className={styles.Avatar}>
                {/* Display first letter of first and last name */}
                <div className={styles.AvatarCircle}>
                  {getAvatarInitials(user.firstName, user.lastName)}
                </div>
                <h5 className={styles.WelcomeText}>
                  Welcome{" "}
                  {`${user.salutation} ${user.firstName} ${user.lastName}`}
                </h5>
                <p className={styles.UserEmail}>{user.email}</p>
              </div>
            </div>
          ) : (
            <h5>ACCOUNT ACCESS</h5>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.ModalBody}>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenuAcc;
