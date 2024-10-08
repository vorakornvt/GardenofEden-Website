import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import * as styles from "./HamburgerMenu.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProductImg1 from "../../assets/images2/PDP1.jpeg";
import ProductImg2 from "../../assets/images2/PDP2.jpeg";
import ProductImg3 from "../../assets/images2/PDP3.jpeg";
import ProductImg4 from "../../assets/images2/PDP6.jpeg";
// import DecorButtom from "../../assets/images2/Asset3real.png";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className={styles.HamBar}>
        <RxHamburgerMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.HamBarText}>
          OUR PRODUCT
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col>
            <Link to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto text-black">
                <Card.Img src={ProductImg1} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Text className="text-center">Cushions</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
            <Link to="/product">
              <Card className="bg-light mb-1 w-75  mx-auto   text-black">
                <Card.Img src={ProductImg2} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Text className="text-center">Notebooks</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
            <Link to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto  text-black">
                <Card.Img src={ProductImg3} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Text className="text-center">Tableware</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>

            <Link to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto  text-black">
                <Card.Img src={ProductImg4} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Text className="text-center">
                    Candles & Candleholders
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
          <Row>
            {/* <img className="mx-auto w-25" src={DecorButtom} alt="LOGO" /> */}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenu;
