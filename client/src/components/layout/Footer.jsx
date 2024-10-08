import * as styles from "./Footer.css";
import { Container } from "react-bootstrap";
import LogoFooterImg from "../../assets/images2/Asset2real.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Container fluid className={styles.footerStyle}>
      <Row className={styles.BoxinsideFooter}>
        <Col className={styles.linksCol}>
          <a href="#tiktok" className={styles.linkStyle}>
            tiktok
          </a>
          <a href="#instagram" className={styles.linkStyle}>
            instagram
          </a>
          <a href="#x" className={styles.linkStyle}>
            x
          </a>
          <a href="#facebook" className={styles.linkStyle}>
            facebook
          </a>
          <a href="#pinterest" className={styles.linkStyle}>
            pinterest
          </a>
          <a href="#snapchat" className={styles.linkStyle}>
            snapchat
          </a>
          <a href="#linkedin" className={styles.linkStyle}>
            linkedIn
          </a>
        </Col>
        <Col className={styles.logoCol}>
          <img src={LogoFooterImg} alt="Logo" className={styles.logo} />
        </Col>
        <Col className={styles.linksCol}>
          <span className={styles.linkStyle}>{getCurrentYear()} - </span>
          <a href="#" className={styles.linkStyle}>
            Garden of Eden
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
