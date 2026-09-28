import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    cart,
    getTotal,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName: formData.name,
            phone: formData.phone,
            items: cart,
            totalAmount: getTotal() + 40,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order failed");
      }

      console.log("Order saved:", data.order);

      setOrderId(data.order.id);
      setOrderPlaced(true);

      clearCart();

    } catch (error) {
      console.error("Order error:", error);

      alert(
        "Unable to place order. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="order-success">

        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for ordering from our café.
        </p>

        <p>
          Your order has been received.
        </p>

        <p>
          <strong>Order ID: {orderId}</strong>
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Customer Form */}
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Customer Details</h2>

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>
            Delivery Address
          </label>

          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>
            Payment Method
          </label>

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Cash on Delivery">
              Cash on Delivery
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Card">
              Credit / Debit Card
            </option>
          </select>

          <button
            type="submit"
            className="place-order-button"
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

        </form>

        {/* Order Summary */}
        <div className="checkout-summary">

          <h2>Your Order</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>

            </div>
          ))}

          <hr />

          <div className="summary-total">

            <span>Total</span>

            <span>
              ₹{getTotal() + 40}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;