import { useState } from "react";
import { useCart } from "../context/CartContext";
import menuItems from "../data/menuData";
import "../Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = [
    "All",
    "Coffee",
    "Tea",
    "Breakfast",
    "Snacks",
    "Desserts",
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-heading">
        <h2>Our Menu</h2>
        <p>Freshly prepared food and beverages for you</p>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-content">
              <span className="menu-category">{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-bottom">
                <span className="menu-price">₹{item.price}</span>

                <button
                  className="add-cart-button"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;