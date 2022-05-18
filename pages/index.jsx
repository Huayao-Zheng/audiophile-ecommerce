import React from 'react';
import { client } from '../lib/client';
import { Product, Hero, BestGear, Category } from '../components';

const Home = ({ products, bannerData }) => {
  console.log(products);

  return (
    <div className="">
      <Hero />
      <Category />
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <BestGear />
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
