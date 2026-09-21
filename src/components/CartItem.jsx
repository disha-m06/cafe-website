import { useCart } from "../context/CartContext";

function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-item">

      {/* ================= PRODUCT ICON ================= */}

      <div className="cart-item-image">

        {item.image}

      </div>


      {/* ================= PRODUCT DETAILS ================= */}

      <div className="cart-item-details">

        <h3>
          {item.name}
        </h3>

        <p>
          ₹{item.price} each
        </p>


        {/* ================= QUANTITY ================= */}

        <div className="quantity-control">

          <button
            onClick={() => decreaseQuantity(item.id)}
            aria-label="Decrease quantity"
          >
            −
          </button>


          <span>
            {item.quantity}
          </span>


          <button
            onClick={() => increaseQuantity(item.id)}
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>


        {/* ================= ITEM TOTAL ================= */}

        <p className="item-total">

          Item Total: ₹{item.price * item.quantity}

        </p>


        {/* ================= REMOVE ================= */}

        <button
          className="remove-button"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;