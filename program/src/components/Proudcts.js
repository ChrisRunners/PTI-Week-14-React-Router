import React from "react";
import { Link } from "react-router-dom";
import products from "./ProductList";

const Products = () => {
  return (
    <div>
      <h2>Products List</h2>
      <p>
        Click on a product to see its details (dynamic route with parameter)
      </p>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>

          <Link to={`/products/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
