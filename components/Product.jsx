import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { escapedNewLineToLineBreakTag } from '../util/helper';

const Product = ({ product }) => {
  const { name, slug, description, isNewProduct, categoryImage, category } = product;

  return (
    <div className="Container flex w-full flex-col gap-8 md:gap-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="h-[352px] rounded-lg bg-[#F1F1F1] lg:h-[560px] lg:max-w-[540px]">
        <img
          src={urlFor(categoryImage.desktop)}
          alt={category}
          className="mx-auto h-full select-none rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center md:gap-8 lg:max-w-md lg:items-start lg:text-left">
        {isNewProduct && <span className="product-overline">NEW PRODUCT</span>}

        <h2 className="text-h4 font-bold uppercase text-black md:text-h2">
          {escapedNewLineToLineBreakTag(name)}
        </h2>

        <p className="max-w-xl text-body font-medium text-black/50 lg:max-w-md">{description}</p>

        <Link href={`product/${slug.current}`}>
          <button className="see-product">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
