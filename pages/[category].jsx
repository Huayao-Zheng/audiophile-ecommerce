import React from 'react';
import Head from 'next/head';
import { client } from '../lib/client';
import { BestGear, Category, Product } from '../components';

const CategoryPage = ({ category, products }) => {
  return (
    <div>
      <Head>
        <title>audiophile - {category}</title>
      </Head>

      <div className="grid h-28 place-items-center bg-black md:h-60">
        <h1 className="text-h4 font-bold uppercase text-white md:text-h2">{category}</h1>
      </div>

      <div className="grid gap-[120px] pt-16 pb-[120px] md:pt-[120px] lg:gap-40 lg:py-40">
        <div className="even-row-reverse space-y-[120px] lg:space-y-40">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <Category />
        <BestGear />
      </div>
    </div>
  );
};

export default CategoryPage;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'headphones' } },
      { params: { category: 'speakers' } },
      { params: { category: 'earphones' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const newProducts = await client.fetch(
    `*[_type == "product" && category == "${category}" && isNewProduct == true]`
  );

  const oldProducts = await client.fetch(
    `*[_type == "product" && category == "${category}" && isNewProduct == false]`
  );

  return {
    props: { category, products: [...newProducts, ...oldProducts] },
  };
};
