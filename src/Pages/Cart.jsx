import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const {
    cart,
    getTotal,
  } = useCart();

  const subtotal = getTotal();

  const deliveryCharge = cart.length > 0 ? 40 : 0;

  const grandTotal = subtotal + deliveryCharge;

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <h1>
          Your Cart 🛒
        </h1>

        <p>
          Your cart is currently empty.
        </p>

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

      <h1>
        Your Cart 🛒
      </h1>

      <div className="cart-container">

        {/* ================= CART ITEMS ================= */}

        <div className="cart-products">

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{subtotal}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span>
              ₹{deliveryCharge}
            </span>

          </div>


          <hr />


          <div className="summary-total">

            <span>
              Total
            </span>

            <span>
              ₹{grandTotal}
            </span>

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