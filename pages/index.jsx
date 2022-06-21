import React from 'react';
import Head from 'next/head';
import { client } from '../lib/client';
import { Hero, BestGear, Category, ProductsGrid } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <Head>
        <title>audiophile - home</title>
      </Head>

      <Hero bannerData={bannerData} />

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
//
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
