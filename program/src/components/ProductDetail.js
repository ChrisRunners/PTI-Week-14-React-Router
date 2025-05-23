import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 101, name: 'Laptop', price: 999.99, category: 'Electronics', description: 'High-performance laptop with 16GB RAM and 1TB SSD' },
  { id: 102, name: 'Smartphone', price: 699.99, category: 'Electronics', description: 'Latest smartphone with 5G capability and triple camera' },
  { id: 201, name: 'Desk Chair', price: 199.99, category: 'Furniture', description: 'Ergonomic office chair with adjustable height and lumbar support' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-card">
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p>Notice how the URL contains the product ID as a parameter: <code>/products/{productId}</code></p>
      <Link to="/products">Back to Products List</Link>
    </div>
  );
};

export default ProductDetail;