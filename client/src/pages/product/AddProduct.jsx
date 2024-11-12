import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  InputGroup,
  Row,
  Col,
  Spinner,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import productService from "../../services/productService";
import * as styles from "./AddProduct.css.ts";
import * as button from "../../components/common/Btn.css.ts";

function AddProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    color: "",
    price: 0,
    sizes: "",
    texture: "",
    onSale: false,
    isAvailable: true,
    availableOnline: true,
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const {
    name,
    description,
    category,
    color,
    price,
    sizes,
    texture,
    onSale,
    isAvailable,
    availableOnline,
  } = productData;

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await productService.post(productData);
      console.log(response);
      navigate("/store/products");
    } catch (err) {
      console.log(err?.response);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <h2 className="text-center mt-5 mb-5">Add Product</h2>
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
                <option value="">Choose product category</option>
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
                <option value="">Choose color</option>
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
                      aria-describedby="price-dollar"
                      id="price-input"
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
    </>
  );
}

export default AddProduct;
