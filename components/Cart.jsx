import React from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useCartContext } from '../context/CartContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
    setCartItems,
    removeAllCartItems,
  } = useCartContext();

  console.log(cartItems);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed z-10 h-full w-full bg-black/40" onClick={() => setShowCart(false)} />

      {/* Cart */}
      <div className="fixed right-0 z-20 h-96 w-80 rounded-lg bg-white px-7 py-8 text-black">
        <div className="flex justify-between">
          <span>Cart ({cartItems.length})</span>
          <button onClick={removeAllCartItems} className="underline hover:text-[#D87D4A]">
            Remove All
          </button>
        </div>

        {/* CartItems */}
        {cartItems.map((item) => (
          <div key={item._id}>
            <div className="h-16 w-16 rounded-lg bg-[#F1F1F1]">
              <img
                src={urlFor(item.image.desktop)}
                alt={item.category}
                className="mx-auto h-full select-none rounded-lg object-cover"
              />
            </div>

            <div className="">
              <span className="uppercase">{item.shortName}</span>
            </div>

            <div className="flex min-w-[120px] items-center justify-between bg-[#F1F1F1]">
              <button className="h-12 w-12 text-lg text-black/25 hover:text-[#D87D4A]">
                <AiOutlineMinus className="mx-auto" />
              </button>
              <span className="text-subTitle font-bold text-black">{}</span>
              <button className="h-12 w-12 text-lg text-black/25 hover:text-[#D87D4A]">
                <AiOutlinePlus className="mx-auto" />
              </button>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between">
          <span>Total</span>
          <span>$ 5,396</span>
        </div>

        {/* Checkout */}
        <button className="see-product w-full">checkout</button>
      </div>
    </>
  );
};

export default Cart;
