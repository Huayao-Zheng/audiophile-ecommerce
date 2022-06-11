import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCartContext } from '../../context/CartContext';

const escapedNewLineToLineBreakTag = (string, option) => {
  if (option === 'title') {
    return string.split('\n').map((item, index) => {
      return index === 0 ? item : [<br key={index} />, item];
    });
  }

  if (option === 'body') {
    return string.split('\\n').map((item, index) => {
      return index === 0 ? item : [<br key={index} />, item];
    });
  }
};

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const { name, image, description, isNewProduct, category, price, features, includes, gallery } = product;
  const { onAdd } = useCartContext();
  const [qty, setQty] = useState(1);

  return (
    <div className="Container text-body font-medium text-black/50">
      <button
        onClick={() => router.back()}
        className="mb-6 mt-4 font-medium hover:text-black md:mt-8 lg:mb-14 lg:mt-20"
      >
        Go Back
      </button>

      {/* product */}
      <div className="md:flex md:items-center md:justify-between md:gap-16 lg:gap-[124px]">
        <div className="h-[327px] rounded-lg bg-[#F1F1F1] md:h-[480px] lg:h-[560px] lg:max-w-[540px]">
          <img src={urlFor(image.desktop)} alt={category} className="mx-auto h-full select-none" />
        </div>

        <div>
          {isNewProduct && <span className="product-overline">NEW PRODUCT</span>}

          {/* name */}
          <h2 className="my-6 text-h4 font-bold uppercase text-black md:mt-4 md:mb-8 md:text-h2">
            {escapedNewLineToLineBreakTag(name, 'title')}
          </h2>

          {/* description */}
          <p className="max-w-xl lg:max-w-md">{description}</p>

          {/* price */}
          <span className="mt-6 mb-8 block text-h5 font-bold text-black md:my-8 lg:mb-12">
            $ {price > 999 ? `${price.toString().slice(0, -3)},${price.toString().slice(-3)}` : price}
          </span>

          {/* Qty */}
          <div className="flex items-center gap-4">
            <div className="flex min-w-[120px] items-center justify-between bg-[#F1F1F1]">
              <button
                onClick={() => (qty > 1 ? setQty(qty - 1) : null)}
                className={`h-12 w-12 text-lg text-black/25 hover:text-[#D87D4A] ${
                  qty === 1 && 'cursor-not-allowed hover:text-black/25'
                }`}
                disabled={qty === 1}
              >
                <AiOutlineMinus className="mx-auto" />
              </button>

              <span className="text-subTitle font-bold text-black">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="h-12 w-12 text-lg text-black/25 hover:text-[#D87D4A]"
              >
                <AiOutlinePlus className="mx-auto" />
              </button>
            </div>

            {/* add to card */}
            <button onClick={() => onAdd(product, qty)} className="see-product">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Features & In the box */}
      <div className="my-20 flex flex-col gap-20 md:my-32 lg:my-40 lg:flex-row xl:gap-32">
        {/* Features */}
        <article className="space-y-6 lg:max-w-[635px]">
          <h2 className="text-2xl font-bold uppercase tracking-[0.86px] text-black md:text-h3">FEATURES</h2>
          <p className="text-body text-black/50">{escapedNewLineToLineBreakTag(features, 'body')}</p>
        </article>
        {/* In the Box */}
        <article className="flex flex-col gap-6 md:flex-row md:gap-44 lg:flex-col lg:gap-6">
          <h2 className="text-2xl font-bold uppercase tracking-[0.86px] text-black md:text-h3">in the box</h2>
          <div>
            {includes.map((accessory, idx) => (
              <div className="flex" key={idx}>
                <span className="w-10 font-bold text-[#D87D4A]">{accessory.quantity}x</span>
                <span className="text-body font-medium">{accessory.item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      {/* Gallery */}
      <div>
        {/* Mobile */}
        <div className="space-y-5 md:hidden">
          <img src={urlFor(gallery.first.mobile)} />
          <img src={urlFor(gallery.second.mobile)} />
          <img src={urlFor(gallery.third.mobile)} />
        </div>

        {/* Tablet */}
        <div className="hidden md:flex md:justify-between lg:hidden">
          <div className="flex w-[40%] flex-col justify-between">
            <img src={urlFor(gallery.first.tablet)} />
            <img src={urlFor(gallery.second.tablet)} />
          </div>
          <img src={urlFor(gallery.third.tablet)} className="w-[57.2%]" />
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex lg:justify-between">
          <div className="flex w-[40%] flex-col justify-between">
            <img src={urlFor(gallery.first.desktop)} />
            <img src={urlFor(gallery.second.desktop)} />
          </div>
          <img src={urlFor(gallery.third.desktop)} className="w-[57.2%]" />
        </div>
      </div>

      {/* You may also like */}
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};
