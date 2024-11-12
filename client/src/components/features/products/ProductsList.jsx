import { useState } from "react";
import * as styles from "./ProductsList.css";
import ProductItem from "./ProductItem";
import { priceFormatter } from "../../../utils/readUtils";
import FilterPanel from "./FilterPanel";

function ProductsList({ products }) {
  const [filters, setFilters] = useState({
    color: "",
    category: "",
    availableOnline: null, // null means no filter applied
  });

  // Filter products based on the selected filters
  const filteredProducts = products.filter((product) => {
    const matchesColor = filters.color ? product.color === filters.color : true;
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;

    return matchesColor && matchesCategory;
  });

  return (
    <div>
      {/* Filter Panel Component */}
      <FilterPanel filters={filters} setFilters={setFilters} />

      {/* Product Grid */}
      <div className={styles.gridContainer}>
        <div className={styles.productGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                productName={product.name}
                description={product.description}
                category={product.category}
                price={priceFormatter(product.price)}
                size={product.size}
                texture={product.texture}
                onSale={product.onSale}
                isAvailable={product.isAvailable}
                availableOnline={product.availableOnline}
                image={product.image}
              />
            ))
          ) : (
            <p>No products found for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
