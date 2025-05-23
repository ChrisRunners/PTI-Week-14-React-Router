import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 101, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 102, name: 'Smartphone', price: 699.99, category: 'Electronics' },
  { id: 201, name: 'Desk Chair', price: 199.99, category: 'Furniture' },
];

const Products = () => {
  return (
    <div>
      <h2>Products List</h2>
      <p>Click on a product to see its details (dynamic route with parameter)</p>
      
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;