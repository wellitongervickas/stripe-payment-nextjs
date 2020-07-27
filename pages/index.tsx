import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Stripe from 'stripe';

import Product from '../components/Product';
import Container from '../components/Container';

import {  GetStaticProps } from 'next';

import stripe from '../config/stripe';

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
              <Container>
                <h1>Sripe Products</h1>
                <div>
                  {products.map(product => (
                    <Link 
                      href={product.id}
                      key={product.id}
                    >
                      <a>
                        <Product 
                          product={product}
                          price={getProductPrice(product.id)}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </Container>
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