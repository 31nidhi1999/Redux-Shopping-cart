import { useDispatch, useSelector } from "react-redux";

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/carts/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          { item.quantity > 1 ? (<button
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              -
            </button>) : (<button disabled>-</button>)}

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;