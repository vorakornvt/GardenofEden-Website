import useAuth from "../../hooks/useAuth";
import { Card } from "@radix-ui/themes";
import * as styles from "./Dashboard.css";
import Button from "react-bootstrap/esm/Button";
import * as stylesTwo from "../../components/common/Btn.css";
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
          <strong>Secret: </strong> Hello Admin - nice to see you here
        </p>
      )}

      {/* Log Out Button */}
      {user && (
        <Button
          className={stylesTwo.BtnMain}
          variant="dark"
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </Button>
      )}
    </Card>
  );
};

export default Dashboard;
