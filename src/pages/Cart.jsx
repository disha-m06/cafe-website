import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    getTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = getTotal();
  const deliveryCharge = cart.length > 0 ? 40 : 0;
  const grandTotal = subtotal + deliveryCharge;

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart 🛒</h1>

        <p>Your cart is currently empty.</p>

        <Link to="/">
          <button className="primary-button">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Your Cart 🛒</h1>

      <div className="cart-container">

        {/* ================= CART ITEMS ================= */}

        <div className="cart-products">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              {/* PRODUCT IMAGE */}
              <div className="cart-item-image">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                ) : (
                  <div>No Image</div>
                )}

              </div>

              {/* PRODUCT DETAILS */}
              <div className="cart-item-details">

                <h3>{item.name}</h3>

                <p>₹{item.price} each</p>

                {/* QUANTITY */}
                <div className="quantity-control">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                </div>

                {/* ITEM TOTAL */}
                <p className="item-total">
                  Item Total: ₹{item.price * item.quantity}
                </p>

                {/* REMOVE */}
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <Link to="/checkout">
            <button className="checkout-button">
              Proceed to Checkout
            </button>
          </Link>

          <Link to="/">
            <button className="continue-shopping-button">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;