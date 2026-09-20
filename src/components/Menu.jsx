import { useState } from "react";
import menuItems from "../data/menuData";
import "../Menu.css";

function Menu() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Coffee",
    "Tea",
    "Breakfast",
    "Snacks",
    "Desserts"
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="menu-section" id="menu">

      <div className="menu-heading">
        <p>OUR MENU</p>

        <h2>Something Delicious for Everyone</h2>

        <p>
          Explore our freshly prepared coffee, drinks,
          snacks, breakfast and desserts.
        </p>
      </div>

      <div className="category-buttons">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "active-category"
                : ""
            }
          >
            {category}
          </button>
        ))}

      </div>

      <div className="menu-grid">

        {filteredItems.map((item) => (

          <div className="menu-card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="menu-card-content">

              <span className="menu-category">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-card-bottom">

                <span className="menu-price">
                  ₹{item.price}
                </span>

                <button className="add-cart-button">
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