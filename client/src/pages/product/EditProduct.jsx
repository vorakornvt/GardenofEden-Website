import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  InputGroup,
  Row,
  Col,
  Spinner,
  Card,
  Button,
} from "react-bootstrap";

import productService from "../../services/productService";
import { getFileFromUrl } from "../../utils/writeUtils";
import Loader from "../../components/common/Loader";
import * as styles from "./AddProduct.css";
import * as button from "../../components/common/Btn.css";

function EditProduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    id: params.id,
    name: "",
    description: "",
    category: "",
    price: 0,
    sizes: "",
    texture: "",
    color: "",
    onSale: false,
    isAvailable: true,
    availableOnline: true,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [preview, setPreview] = useState(true);

  const {
    id,
    name,
    description,
    category,
    price,
    sizes,
    texture,
    color,
    onSale,
    isAvailable,
    availableOnline,
    image,
  } = productData;

  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      return () => {
        effectRan.current = true;
      };
    }
  }, [id]);

  async function fetchProduct() {
    try {
      const response = await productService.getById(id);
      const dbProduct = response.data;
      setProductData((prevData) => ({ ...prevData, ...dbProduct }));

      if (dbProduct.image) {
        const fileGlob = getFileFromUrl(dbProduct.image);
        setUploadedFile(fileGlob);
      }
    } catch (err) {
      setError(true);
    }
  }

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
    setPreview(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await productService.put(id, productData, uploadedFile);
      navigate("/store/products");
    } catch (err) {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Container className="text-center">
        <p>Error loading product details</p>
      </Container>
    );
  }

  if (loading && effectRan.current === false) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="text-center mt-5 mb-5">Edit Product</h2>
      <Card className={styles.productAdd}>
        <Form className="mx-auto mt-3 mb-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-5">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={name}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter product description"
              name="description"
              value={description}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={category}
              onChange={handleTextChange}
            >
              {/* Add appropriate category options here */}
              <option value="Baskets">Baskets</option>
              <option value="Bowls">Bowls</option>
              <option value="Candles">Candles</option>
              <option value="Cushion">Cushion</option>
              <option value="Plates">Plates</option>
              <option value="Sets">Sets</option>
              <option value="Table Linen">Table Linen</option>
              <option value="Tea and Coffee">Tea and Coffee</option>
              <option value="Trays">Trays</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Color</Form.Label>
            <Form.Control
              as="select"
              name="color"
              value={color}
              onChange={handleTextChange}
            >
              {/* Add appropriate color options here */}
              <option value="Beige">Beige</option>
              <option value="Black">Black</option>
              <option value="Gold">Gold</option>
              <option value="Grey">Grey</option>
              <option value="Multicolor">Multicolor</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col lg={4} md={4} sm={12}>
                <Form.Label>Product Price</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="price-dollar">$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="0"
                    value={price}
                    onChange={handleTextChange}
                  />
                </InputGroup>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <Form.Label>Product Sizes</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product sizes"
                  name="sizes"
                  value={sizes}
                  onChange={handleTextChange}
                />
              </Col>

              <Col lg={4} md={4} sm={12}>
                <Form.Label>Product Texture</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product texture"
                  name="texture"
                  value={texture}
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col lg={4} md={4} sm={12}>
                <Form.Label>On Sale</Form.Label>
                <Form.Control
                  as="select"
                  name="onSale"
                  value={onSale}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      onSale: e.target.value === "true",
                    })
                  }
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Control>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <Form.Label>Is Available</Form.Label>
                <Form.Control
                  as="select"
                  name="isAvailable"
                  value={isAvailable}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      isAvailable: e.target.value === "true",
                    })
                  }
                >
                  <option value={true}>In Stock</option>
                  <option value={false}>Out of Stock</option>
                </Form.Control>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <Form.Label>Available Online</Form.Label>
                <Form.Control
                  as="select"
                  name="availableOnline"
                  value={availableOnline}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      availableOnline: e.target.value === "true",
                    })
                  }
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              className="mb-4"
              onChange={handleFileChange}
            />
            {preview && (
              <img
                style={{ width: "20%", margin: "1rem auto", opacity: 0.7 }}
                src={image}
                alt="preview"
              />
            )}
          </Form.Group>

          <div className="text-center">
            <Button
              className={button.BtnMain}
              variant="dark"
              type="submit"
              disabled={loading}
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
                "Submit"
              )}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default EditProduct;
