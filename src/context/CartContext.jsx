import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  // ========================================
  // ADD TO CART
  // ========================================

  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );


      // Product already exists
      // Increase quantity
      if (existingProduct) {

        return previousCart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + 1,
              }

            : item

        );

      }


      // New product
      return [
        ...previousCart,

        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  // ========================================
  // INCREASE QUANTITY
  // ========================================

  const increaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item

      )

    );

  };


  // ========================================
  // DECREASE QUANTITY
  // ========================================

  const decreaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1,
              }

            : item

        )

        .filter((item) => item.quantity > 0)

    );

  };


  // ========================================
  // REMOVE PRODUCT
  // ========================================

  const removeFromCart = (id) => {

    setCart((previousCart) =>

      previousCart.filter(
        (item) => item.id !== id
      )

    );

  };


  // ========================================
  // CLEAR CART
  // ========================================

  const clearCart = () => {

    setCart([]);

  };


  // ========================================
  // GET TOTAL PRICE
  // ========================================

  const getTotal = () => {

    return cart.reduce(

      (total, item) =>

        total + item.price * item.quantity,

      0

    );

  };


  // ========================================
  // GET CART COUNT
  // ========================================

  const getCartCount = () => {

    return cart.reduce(

      (total, item) =>

        total + item.quantity,

      0

    );

  };


  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotal,
        getCartCount,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}


export function useCart() {

  return useContext(CartContext);

}