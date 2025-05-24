import { Link } from "react-router-dom";
import products from "./ProductList";

const Products = () => {
  return (
    <div>
      <h2>Daftar Senjata Anomali</h2>
      <p>
        Berikut adalah senjata anomali yang telah ditemukan... (dynamic route with parameter)
      </p>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Harga: {product.price}</p>
          <p>Kateogri: {product.category}</p>

          <Link to={`/products/${product.id}`}>
            <button>Lihat Keterangan</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
