import * as styles from "./FilterPanel.css";
import { Button } from "react-bootstrap";
import * as buttons from "../../common/Btn.css";
import { Link } from "react-router-dom";

const FilterPanel = ({ filters, setFilters }) => {
  const colors = [
    "Beige",
    "Black",
    "Gold",
    "Grey",
    "Multicolor",
    "Silver",
    "White",
  ];
  const categories = [
    "Baskets",
    "Bowls",
    "Candles",
    "Cushion",
    "Plates",
    "Sets",
    "Table Linen",
    "Tea and Coffee",
    "Trays",
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between ">
        <div>
          {location.pathname === "/store/onsale" ? (
            <Button
              variant="outline-dark"
              className={buttons.BtnMain}
              as={Link}
              to="/store/products"
            >
              All Product
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              className={buttons.BtnMain}
              as={Link}
              to="/store/onsale"
            >
              Online Offer
            </Button>
          )}
        </div>

        <div className={styles.filterPanel}>
          {/* Color Filter */}
          <div className={styles.filterSelectWrapper}>
            <label htmlFor="color" className={styles.filterLabel}>
              Color
            </label>
            <select
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
              className={styles.filterSelect}
            >
              <option value="">All Colors</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className={styles.filterSelectWrapper}>
            <label htmlFor="category" className={styles.filterLabel}>
              Category
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className={styles.filterSelect}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
