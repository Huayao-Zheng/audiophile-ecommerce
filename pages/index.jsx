import React from 'react';
import { client } from '../lib/client';
import { Hero, BestGear, Category, ProductsGrid } from '../components';

const Home = ({ products }) => {
  return (
    <div>
      <Hero />
      <div className="mt-10 mb-28 md:my-24 lg:mt-28 lg:mb-40">
        <Category />
      </div>

      <ProductsGrid />

      <div className="my-28 md:my-24 lg:mt-48 lg:mb-52">
        <BestGear />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
