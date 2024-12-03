import React from "react";
import ProductItem from "./ProductItem";
import { useCart } from "../contexts/CartContext";
import "../styles/ProductList.css";

function ProductList() {
  const { products } = useCart();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
