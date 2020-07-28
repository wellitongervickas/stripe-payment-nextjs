import Stripe from 'stripe';

const publicKey = process.env.PUBLIC_KEY;
const secretKey = process.env.SECRET_KEY;

const stripe = new Stripe(secretKey, {
    apiVersion: '2020-03-02',
});

export {
  stripe,
  publicKey,
  secretKey,
};
