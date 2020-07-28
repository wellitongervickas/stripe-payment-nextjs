import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { publicKey } from '../../config/stripe';

const stripePromise = loadStripe(publicKey);

interface Props {
  priceId: string
  productId: string
}

const CheckoutView: React.FC<Props> = ({ priceId, productId }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      lineItems: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `${process.env.APP_URL}/success?product_id=${productId}&price_id=${priceId}`,
      cancelUrl: `${process.env.APP_URL}/cancel?product_id=${productId}&price_id=${priceId}`,
    }).catch(err => console.error(err));
  };

  return (
    <div className="checkout-container">
      <button
        role="link"
        onClick={handleClick}
        className="btn-success"
      >
        Buy
      </button>
    </div>
  );
}

export default CheckoutView;
