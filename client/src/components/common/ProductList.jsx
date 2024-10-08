import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProductImg1 from "../../assets/images2/PDP1.jpeg";
import ProductImg2 from "../../assets/images2/PDP2.jpeg";
import ProductImg3 from "../../assets/images2/PDP3.jpeg";
import ProductImg4 from "../../assets/images2/PDP6.jpeg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import * as styles from "./ProductList.css";

function ProductList() {
  return (
    <Container fluid className={styles.LayoutPD}>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={3}>
          <Link className={styles.TextPD} to="/product">
            <Card className={styles.CardDecor}>
              <Card.Img src={ProductImg1} alt="Card image" />

              <Card.Text className={styles.TextPD}>Cushions</Card.Text>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Link className={styles.TextPD} to="/product">
            <Card className={styles.CardDecor}>
              <Card.Img src={ProductImg2} alt="Card image" />

              <Card.Text className={styles.TextPD}>Notebooks</Card.Text>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Link className={styles.TextPD} to="/product">
            <Card className={styles.CardDecor}>
              <Card.Img src={ProductImg3} alt="Card image" />

              <Card.Text className={styles.TextPD}>Tableware</Card.Text>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Link className={styles.TextPD} to="/product">
            <Card className={styles.CardDecor}>
              <Card.Img src={ProductImg4} alt="Card image" />

              <Card.Text className={styles.TextPD}>
                Candles & Candleholders
              </Card.Text>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
