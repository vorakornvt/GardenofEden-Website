import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import * as fonts from "../../components/common/Fonts.css";
import * as buttons from "../../components/common/Btn.css";
import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";
import ProductsList from "../../components/features/products/ProductsList";
import TuLoader from "../../components/common/Loader";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductsOnsale() {
  // HOOK: CONTEXT FOR AUTH
  const { user } = useAuth();

  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  // [5A] COMPONENT FUNCTION
  async function fetchProducts() {
    try {
      // TU API Request
      const response = await productService.getOnsale();

      // Access Object Properties to Find Data Array & Save to Variable
      const data = await response.data;

      // SUCCESS: Output needs to override data state
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    );
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center mt-4">
        <TuLoader />
      </Container>
    );
  }

  return (
    <Container className="text-center mt-4">
      <h1 className={fonts.FontBrand}>Online Offer Product</h1>
      <p className={fonts.FontBody}>
        Special Online offer just for you here by Garden of Eden.
      </p>

      {/* ADMIN SECTION: AUTHORISATION REQUIRED */}
      {user && user.isAdmin && (
        <div className="text-center mt-5 mb-5">
          <Button
            variant="dark"
            className={buttons.BtnMain}
            as={Link}
            to="/store/product/"
          >
            Add Product
          </Button>
        </div>
      )}

      {/* here i want fitter button that user can fitter there product down ther by its color category onlineAvailble  */}

      {/* Products Menu */}
      {<ProductsList products={data} />}
    </Container>
  );
}

export default ProductsOnsale;
