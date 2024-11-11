import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Spinner, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

// LOCAL MODULES
import * as styles from "./Signup.css";
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { Button } from "@radix-ui/themes";

function Signup() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    salutation: "",
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { username, email, password, firstName, lastName, salutation } = user;

  // FORM FUNCTIONS
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Early Validation - Error Check First
    if (password !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    // API Call to Write User Data
    try {
      const response = await authService.register(user);
      loginSaveUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err?.response);
      setLoading(false);
    }
  };

  return (
    <Container className={styles.FormBox} title="Register" authform>
      <h2 className={styles.heading}>Register</h2>
      <h3 className={styles.subHeading}>
        Please fill in the information below:
      </h3>
      <Form onSubmit={handleSubmit}>
        {/* GROUP 1: USERNAME */}
        <Form.Group className="mb-1" controlId="username">
          <Form.Label className={styles.styledLabel}>Username</Form.Label>
          <Form.Control
            className={styles.styledInput}
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        {/* GROUP 2: EMAIL */}
        <Form.Group className="mb-1" controlId="email">
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

        {/* GROUP 3: SALUTATION, FIRST NAME, AND LAST NAME */}
        <Row className="mb-1">
          {/* SALUTATION */}
          <Col sm={4}>
            <Form.Group controlId="salutation">
              <Form.Label className={styles.styledLabel}>Salutation</Form.Label>
              <Form.Control
                as="select"
                className={styles.styledInput}
                name="salutation"
                value={salutation}
                onChange={handleTextChange}
                required
              >
                <option value="">Select Salutation</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* FIRST NAME */}
          <Col sm={4}>
            <Form.Group controlId="firstName">
              <Form.Label className={styles.styledLabel}>First Name</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleTextChange}
                required
              />
            </Form.Group>
          </Col>

          {/* LAST NAME */}
          <Col sm={4}>
            <Form.Group controlId="lastName">
              <Form.Label className={styles.styledLabel}>Last Name</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleTextChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* GROUP 4: PASSWORD */}
        <Form.Group className="mb-1" controlId="password">
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

        {/* GROUP 5: PASSWORD CONFIRM */}
        <Form.Group className="mb-1" controlId="password-confirm">
          <Form.Label className={styles.styledLabel}>
            Confirm Password
          </Form.Label>
          <Form.Control
            className={styles.styledInput}
            type="password"
            placeholder="Password Confirmation"
            ref={passwordConfirmRef}
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
            "CREATE MY ACCOUNT"
          )}
        </Button>
      </Form>
      <div className={styles.userNav}>
        <span>
          Already a member? &nbsp;
          <Link to="/login">Login Here</Link>
        </span>
      </div>
    </Container>
  );
}

export default Signup;
