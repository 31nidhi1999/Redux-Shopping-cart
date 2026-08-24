import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/carts/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = ()=>{
    dispatch(addToCart(product));
  }
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>

      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;