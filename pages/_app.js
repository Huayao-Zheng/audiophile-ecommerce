import React from 'react';

import { Layout } from '../components';
import { CartContext } from '../context/CartContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}

export default MyApp;
