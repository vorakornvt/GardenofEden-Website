import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as styles from "./Trending.css";
import ImgOne from "../../src/assets/images/productPic1.jpg";
import ImgTwo from "../../src/assets/images/productPic2.jpg";
import ImgThree from "../../src/assets/images/productPic3.jpg";
import SoiconcBtn from "../../src/components/common/SoiconcBtn";

function Trending() {
  return (
    <Fragment>
      <div className={styles.trendingContainer}>
        <h2 className={styles.heading}>TRENDING</h2>

        <Row>
          <Col md={4}>
            <Card className={styles.productCard}>
              <Card.Img
                className={styles.productImage}
                variant="top"
                src={ImgOne}
              />
              <Card.Body>
                <Card.Text className={styles.productName}>
                  SOICONE Q2-HEADPHONE
                </Card.Text>
                <Card.Text className={styles.productName}>200$</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={styles.productCard}>
              <Card.Img
                className={styles.productImage}
                variant="top"
                src={ImgTwo}
              />
              <Card.Body>
                <Card.Text className={styles.productName}>
                  SOICONE 11Z-EARSPLUG
                </Card.Text>
                <Card.Text className={styles.productName}>220$</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={styles.productCard}>
              <Card.Img
                className={styles.productImage}
                variant="top"
                src={ImgThree}
              />
              <Card.Body>
                <Card.Text className={styles.productName}>
                  SOICONE X0-SPEAKER
                </Card.Text>
                <Card.Text className={styles.productName}>180$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SoiconcBtn>View All Trending</SoiconcBtn>
      </div>
    </Fragment>
  );
}

export default Trending;
