// Import React and any other necessary components
import React from "react";
import { GiShoppingBag } from "react-icons/gi"; // Assuming you're using the react-icons library

// Your Navbar component
function Navbar({ setCartVisible, productsInCart }) {
  return (
    <div className="navbar">
      <h3 className="logo">Logo</h3>
      <button
        className="btn shopping-cart-btn"
        onClick={() => setCartVisible(true)}
      >
        <GiShoppingBag size={24} />
        {productsInCart.length > 0 && (
          <span className="product-count">{productsInCart.length}</span>
        )}
      </button>
    </div>
  );
}

// Export the Navbar component
export default Navbar;
