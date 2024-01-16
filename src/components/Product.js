import React from 'react'
import ProductCard from "./ProductCard";

const Product = ({ products, onAddToCart }) => {
  return (
    <main>
      <h2 className="title">Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
};

export default Product