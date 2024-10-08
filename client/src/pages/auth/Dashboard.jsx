import useAuth from "../../hooks/useAuth";
import { Card, Button } from "@radix-ui/themes";
import * as styles from "./Dashboard.css";

const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();

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
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {
              logout();
            }}
            className={styles.submitButton}
          >
            Log Out
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Dashboard;
