import * as styles from "./Footer.css";
import { Container } from "react-bootstrap";
import LogoFooterImg from "../../assets/images/Asset5real.png";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <h1>FOOTER</h1>
    </div>
    // <Container className={styles.footer}>
    //   <img src={LogoFooterImg} alt="" className={styles.logo} />
    //   <div>&copy; {getCurrentYear()} SOICONE STORE</div>
    // </Container>
  );
};

export default Footer;
