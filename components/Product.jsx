import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const escapedNewLineToLineBreakTag = (string) => {
  return string.split('\\n').map((item, index) => {
    return index === 0 ? item : [<br key={index} />, item];
  });
};

const Product = ({ product }) => {
  const { name, slug, description, isNewProduct, categoryImage, category } = product;

  return (
    <div className="Container  lg:flex">
      <div className="h-[352px] rounded-lg bg-[#F1F1F1] md:w-[689px] lg:h-[560px]">
        <img
          src={urlFor(categoryImage.desktop)}
          alt={category}
          className="mx-auto h-full rounded-lg object-cover"
        />
      </div>

      <div className="">
        {isNewProduct && <span className="product-overline">NEW PRODUCT</span>}

        <h2 className="text-h4 font-bold text-black md:text-h2">{escapedNewLineToLineBreakTag(name)}</h2>

        <p className="text-body font-medium text-black/50">{description}</p>

        <Link href={`product/${slug.current}`}>
          <button className="see-product">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
