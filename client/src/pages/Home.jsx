import "@radix-ui/themes/styles.css";
import { Container } from "react-bootstrap";
import * as style from "./Home.css";
import { Link } from "react-router-dom";
import DecorButtomWhite from "../../src/assets/images2/A2.png";
import ProductList from "../../src/components/common/ProductList";

const Home = () => {
  return (
    <Container fluid>
      <div className={style.HeroPic}>
        <div className={style.Overlay}>
          <div className={style.TextOverlay}>
            <h2 className={style.TextOverlayTwo}>Forbidden Luxe</h2>

            <p>
              I wish for what's forbidden, Return to Nature, Rediscover Paradise{" "}
              <Link className="text-white">Discover</Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <ProductList />
    </Container>
  );
};

export default Home;
