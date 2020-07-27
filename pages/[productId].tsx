import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import Stripe from 'stripe';

import Product from '../components/Product';

import { GetStaticPaths, GetStaticProps } from 'next';

import stripe from '../config/stripe';

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
                <Product 
                    product={product}
                    price={price}
                />
                <Link href="/">
                    <a>Go back</a>
                </Link>
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