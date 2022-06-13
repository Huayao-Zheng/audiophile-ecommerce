import React from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useCartContext } from '../context/CartContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, removeAllCartItems } =
    useCartContext();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed top-[89.98px] left-0 z-40 h-full w-full bg-black/40"
        onClick={() => setShowCart(false)}
      />

      {/* Cart */}
      <div className="absolute right-0 top-20 z-50 w-80 min-w-[327px] rounded-lg bg-white px-7 py-8 md:min-w-[377px]">
        {/* Cart header */}
        <div className="mb-8 flex justify-between">
          <span className="text-h5 font-bold uppercase text-black">Cart ({totalQuantities})</span>
          <button
            onClick={removeAllCartItems}
            className="font-medium text-black/50 underline hover:text-[#D87D4A]"
          >
            Remove All
          </button>
        </div>

        {/* CartItems */}
        <div className="mb-8 space-y-6">
          {cartItems.map((item) => (
            <div className="flex items-center justify-between" key={item._id}>
              <div className="flex items-center gap-4">
                {/* item img */}
                <div className="h-16 w-16 rounded-lg bg-[#F1F1F1]">
                  <img
                    src={urlFor(item.image.desktop)}
                    alt={item.category}
                    className="h-full w-full select-none rounded-lg object-cover"
                  />
                </div>

                {/* name & price */}
                <div>
                  <div className="text-body font-bold uppercase text-black">{item.shortName}</div>
                  <div className="text-sm font-bold uppercase leading-6 text-black/50">
                    ${' '}
                    {item.price > 999
                      ? `${item.price.toString().slice(0, -3)},${item.price.toString().slice(-3)}`
                      : item.price}
                  </div>
                </div>
              </div>

              {/* Item Quantity */}
              <div className="flex w-24 items-center justify-between bg-[#F1F1F1]">
                <button
                  onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                  className={`h-8 w-12 text-xs text-black/25 hover:text-[#D87D4A] ${
                    item.quantity === 1 && 'cursor-not-allowed hover:text-black/25'
                  }`}
                  disabled={item.quantity === 1}
                >
                  <AiOutlineMinus className="mx-auto" />
                </button>
                <span className="text-subTitle font-bold text-black">{item.quantity}</span>
                <button
                  onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                  className="h-8 w-12 text-xs text-black/25 hover:text-[#D87D4A]"
                >
                  <AiOutlinePlus className="mx-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mb-6 flex justify-between">
          <span className="text-body font-medium uppercase text-black/50">Total</span>

          <span className="text-lg font-bold uppercase leading-6 text-black">
            ${' '}
            {totalPrice > 999
              ? `${totalPrice.toString().slice(0, -3)},${totalPrice.toString().slice(-3)}`
              : totalPrice}
          </span>
        </div>

        {/* Checkout */}
        <button className="see-product w-full">checkout</button>
      </div>
    </>
  );
};

export default Cart;
