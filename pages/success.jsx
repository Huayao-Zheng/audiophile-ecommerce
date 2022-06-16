import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';
import { useCartContext } from '../context/CartContext';
import { runFireworks } from '../lib/utils';

const moneyFormat = (num) => {
  return '$ ' + num > 999 ? `${num.toString().slice(0, -3)},${num.toString().slice(-3)}` : num;
};

const Success = () => {
  const { totalPrice, setCartItems, setTotalPrice, setTotalQuantities } = useCartContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="grid h-[calc(100vh-91.22px)] place-items-center bg-[#F2F2F2] px-6">
      <div className="max-w-[540px] rounded-lg bg-white p-8">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[#D87D4A]">
          <BsCheckLg className="text-2xl text-white" />
        </div>

        <p className="mt-6 mb-4 text-2xl font-bold leading-7 tracking-[0.86px] text-black md:mt-8 md:mb-6 md:text-h3">
          THANK YOU <br /> FOR YOUR ORDER
        </p>

        <p className="text-body font-medium text-black/50">You will receive an email confirmation shortly.</p>

        {/* <div className="rounded-lg">
          <div className=""></div>

          <div className="bg-black">
            <span>GRAND TOTAL</span>
            <span className="text-white">{moneyFormat(totalPrice)}</span>
          </div>
        </div> */}

        <Link href="/">
          <button type="button" className="see-product mt-6 w-full md:mt-11">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
