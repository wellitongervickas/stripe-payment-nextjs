import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';

import Product from '../components/Product';
import { stripe } from '../config/stripe';

interface Props {
  product: Stripe.Product
  price: Stripe.Price,
}

const ProductView: React.FC<Props> = ({ product, price }) => (
<>
  <Head>
    <title>{product.name}</title>
  </Head>
  <section>
    <main>
      <div className="product-view">
        <Product
          product={product}
          price={price}
          showDetails={false}
        />
        <Link href="/">
          <a className="link-go-home">Go home</a>
        </Link>
      </div>
    </main>
  </section>
</>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await stripe.products.list();

  const paths = products.data.map(product => ({
    params: {
      productId: product.id,
    },
  }));

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await stripe.products.retrieve(params.productId as string);
  const prices = await stripe.prices.list();

  const price = prices.data.find(price => price.product === params.productId)

  return {
    props: {
      price,
      product,
    },
  };
}

export default ProductView;
