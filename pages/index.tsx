import React from 'react';
import Head from 'next/head';
import Stripe from 'stripe';
import {  GetStaticProps } from 'next';

import Product from '../components/Product';

import { stripe } from '../config/stripe';
interface Props {
  products: Stripe.Product[]
  prices: Stripe.Price[]
}

const HomeView: React.FC<Props> = ({ products, prices }) => {
  const getProductPrice = (id: string):Stripe.Price => prices.find(price => price.product === id);

  return (
    <>
      <Head>
        <title>Stripe Products</title>
      </Head>
      <section>
        <main>
          <h1 className="products-title">Sripe Products</h1>
          <div className="products-list">
            {products.map(product => (
              <Product
                key={product.id}
                product={product}
                price={getProductPrice(product.id)}
                showDetails={true}
              />
            ))}
          </div>
        </main>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await stripe.products.list();
  const { data: prices } = await stripe.prices.list();

  return {
    props: {
      prices,
      products,
    },
  };
}

export default HomeView;
