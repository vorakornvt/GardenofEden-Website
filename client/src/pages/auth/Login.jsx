import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Spinner } from "react-bootstrap";

// LOCAL MODULES
import * as styles from "./Signup.css"; // Same styles as the Signup page
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { Button } from "@radix-ui/themes";

function Login() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err?.response);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Container className={styles.FormBox} title="Log In" authform>
      <h2 className={styles.heading}>Log In</h2>
      <h3 className={styles.subHeading}>
        Please enter your email and password:
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className={styles.styledLabel}>Email</Form.Label>
          <Form.Control
            className={styles.styledInput}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className={styles.styledLabel}>Password</Form.Label>
          <Form.Control
            className={styles.styledInput}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <Button
          className={styles.submitButton}
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className={styles.spinnerContainer}>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </div>
          ) : (
            "LOGIN"
          )}
        </Button>
      </Form>
      <div className={styles.userNav}>
        <span>
          Not a member? &nbsp;
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </Container>
  );
}

export default Login;
