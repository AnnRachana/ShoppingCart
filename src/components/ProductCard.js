// ProductCard.js

import React from "react";
import RatingStars from "./RatingStars";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product" key={product.id}>
      <img className="product-image" src={product.image} alt={product.image} />
      <h4 className="product-name">{product.name}</h4>
      <RatingStars rating={product.rating} />
      <p>{product.description}</p>
      <span className="product-price">{product.price}$</span>
      <div className="buttons">
        <button className="btn">Detail</button>
        <button className="btn" onClick={() => onAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

