import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './ProductList'

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
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p className='notice'>Perhatikan URL yang mencakup ID dari Product sebagai parameter: <code>/products/{productId}</code></p>
      <Link className='link' to="/products">
      <button>Back to Products List</button>
      </Link>
    </div>
  );
};

export default ProductDetail;