import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Spinner } from "react-bootstrap";

// Local modules
import * as styles from "./ProductDetail.css";
import * as button from "../../components/common/Btn.css";
import { priceFormatter } from "../../utils/readUtils";
import useAuth from "../../hooks/useAuth";
import productService from "../../services/productService";
import TuLoader from "../../components/common/Loader";
import { Link } from "react-router-dom";

function ProductDetail() {
  // CUSTOM HOOKS
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  // STATE INIT
  const [productData, setProductData] = useState({
    id: params.id,
    name: "",
    description: "",
    category: "",
    price: 0,
    sizes: "",
    texture: "",
    onSale: false,
    isAvailable: true,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // Destructure data state nested object properties
  const {
    id,
    name,
    description,
    category,
    price,
    color,
    availableOnline,
    sizes,
    texture,
    isAvailable,
    image,
  } = productData;

  // HOOK: Prevention of useEffect calling TWICE (React v18)
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // FUNCTIONS
  // [1] PAGE POPULATION
  async function fetchProduct() {
    try {
      const response = await productService.getById(id);
      const fetchedProduct = await response.data;
      console.log(fetchedProduct);

      // Using the spread, we create a shallow copy of the original object & overwrite/add with new data
      // NOTE: We could just do setData({...productData, ...fetchedCurrency}), but the dependency array then has issues!
      // NOTE: Specifically, we pass a function that has a first param (productData) same as the current value of the state, and we set it to state we want in the return of the function!
      setProductData((productOnMount) => ({
        ...productOnMount,
        ...fetchedProduct,
      }));
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // [2] DELETION OF DOCUMENT
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call API - must match server route + pass id to route
      const response = await productService.del(id);
      console.log(response);

      // onSuccess - Redirect
      setLoading(false);
      navigate("/store/products");
    } catch (err) {
      console.log(err?.response);
      setError(true);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center">
        <p>Error page</p>
      </Container>
    );
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center">
        <TuLoader />
      </Container>
    );
  }

  return (
    <Container>
      {/* MAIN PRODUCT SECTION */}
      <div className={styles.productBox}>
        {/* IMAGE BOX: LEFT */}
        <div className={styles.productBoxLeft}>
          <img className={styles.productWindow} src={image} alt={name} />
        </div>
        {/* TEXT & PURCHASE AREA: RIGHT */}
        <div className={styles.productBoxRight}>
          {/* HERO BOX */}
          <div className={styles.productHeroContainer}>
            <h2 className={styles.NamePro}>{name}</h2>
            <p className="fs-6 fw-light text-secondary">{texture}</p>
            <div className="d-flex">
              <Button
                className="d-flex justify-content-between align-items-center col"
                as={Link}
                variant="secondary"
              >
                <span>Add to Cart</span>
                <span className="ms-auto">{priceFormatter(price)}</span>
              </Button>
            </div>
            <p className="fs-6 mt-2  text-dark">Description : {description}</p>
            <p className="fs-6  text-secondary">Sizes : {sizes}</p>
            <p className="fs-6  text-secondary">Color : {color}</p>
          </div>

          {/* AUTH LINKS: EDIT & DELETE */}
          {user && user.isAdmin && (
            <div className="d-flex">
              <Button
                className={button.BtnMain}
                as={Link}
                variant="dark"
                to={`/store/product/edit/${id}`}
              >
                Edit
              </Button>
              <Button
                className={button.BtnMain}
                onClick={handleDeleteClick}
                loadingState={loading}
                variant="dark"
              >
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Delete"
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
