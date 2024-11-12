import useAuth from "../../hooks/useAuth";
import { Card } from "@radix-ui/themes";
import * as styles from "./Dashboard.css";
import Button from "react-bootstrap/esm/Button";
import * as stylesTwo from "../../components/common/Btn.css";
import { Link } from "react-router-dom";
const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();
  // Get first letter of first name and last name for avatar
  const getAvatarInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
  };

  // CONDITIONAL LOAD: USER ERROR [POSSIBLY REPLACE WITH LOADING STATE]
  if (!user) {
    return (
      <Card className={styles.cardContainer} title="Profile" authform>
        <div className={styles.errorMessage}>Cannot Retrieve User</div>
      </Card>
    );
  }

  return (
    <>
      <Card className={styles.cardContainer} title="Profile" authform>
        <div className={styles.Avatar}>
          {/* Display first letter of first and last name */}
          <div className={styles.AvatarCircle}>
            {getAvatarInitials(user.firstName, user.lastName)}
          </div>
        </div>
        <div className={styles.welcomeMessage}>
          <h4>Welcome {user.username}!</h4>
        </div>
        <p className={styles.textContent}>
          <strong>Email: </strong>
          {user.email}
        </p>
        {user.isAdmin && (
          <p className={styles.textContent}>
            <strong>Admin mode: </strong> Hello, {user.firstName} - Nice to see
            you here
          </p>
        )}

        {/* Log Out Button */}
        {user && (
          <div className="d-flex">
            <Button
              className={stylesTwo.BtnMain}
              variant="dark"
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </Button>
            <Button
              className={stylesTwo.BtnMain}
              as={Link}
              to="/store/products"
              variant="dark"
            >
              PRODUCTS
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default Dashboard;
