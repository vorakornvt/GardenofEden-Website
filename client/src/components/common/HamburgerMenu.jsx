import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import * as styles from "./HamburgerMenu.css";

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
        <RxHamburgerMenu size={18} />
      </Button>

      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.HamBarText}>
          OUR PRODUCT
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col>
            <Link className="link-underline-light" to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto text-black border border-white">
                <Card.Img src={ProductImg1} alt="Card image" />

                <Card.Text className={styles.ProductText}>Cushions</Card.Text>
              </Card>
            </Link>
            <Link className="link-underline-light" to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto text-black border border-white">
                <Card.Img src={ProductImg2} alt="Card image" />

                <Card.Text className={styles.ProductText}>Notebooks</Card.Text>
              </Card>
            </Link>
            <Link className="link-underline-light" to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto text-black border border-white">
                <Card.Img src={ProductImg3} alt="Card image" />

                <Card.Text className={styles.ProductText}>Tableware</Card.Text>
              </Card>
            </Link>

            <Link className="link-underline-light" to="/product">
              <Card className="bg-light mb-1 w-75 mx-auto text-black border border-white">
                <Card.Img src={ProductImg4} alt="Card image" />

                <Card.Text className={styles.ProductText}>
                  Candles & Candleholders
                </Card.Text>
              </Card>
            </Link>
          </Col>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default HamburgerMenu;
