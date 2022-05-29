import React from 'react';
import { client } from '../lib/client';
import { BestGear, Category, Product } from '../components';

const CategoryPage = ({ category, products }) => {
  console.log(category, products);

  return (
    <div>
      <div className="grid h-28 place-items-center bg-black md:h-60">
        <h1 className="text-h4 font-bold uppercase text-white md:text-h2">{category}</h1>
      </div>

      <div className="grid gap-32 lg:gap-40">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className="mt-10 mb-28 md:my-24 lg:mt-28 lg:mb-40">
        <Category />
      </div>

      <div className="my-28 md:my-24 lg:mt-48 lg:mb-52">
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
