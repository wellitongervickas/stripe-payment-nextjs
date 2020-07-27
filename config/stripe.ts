import Stripe from 'stripe';

export const publicKey = process.env.PUBLIC_KEY;
export const secretKey = process.env.SECRET_KEY;

export const stripe = new Stripe(secretKey, {
    apiVersion: '2020-03-02',
});

export default stripe;
