import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        } else {
          return cartProduct;
        }
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${product.shortName} added to the cart.`);
  };

  const toggleCartItemQuantity = (id, value) => {
    if (value === 'inc') {
      const updatedItems = [...cartItems].map((item) => {
        if (item._id === id) {
          setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedItems);
    }

    if (value === 'dec') {
      const updatedItems = [...cartItems].map((item) => {
        if (item._id === id) {
          setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);

          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      setCartItems(updatedItems);
    }
  };

  const removeAllCartItems = () => {
    setCartItems([]);

    toast.success(`Removed all items`);
  };

  return (
    <Context.Provider
      value={{
        removeAllCartItems,
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        toggleCartItemQuantity,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
