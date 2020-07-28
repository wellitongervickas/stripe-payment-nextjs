import React from 'react';
import Link from 'next/link';

import Stripe from 'stripe';

import Checkout from '../Checkout';

interface Props {
  product: Stripe.Product
  price: Stripe.Price
  showDetails?: Boolean
}

const Product: React.FC<Props> = ({ product, price, showDetails }) => (
  <div className="product-container">
      <div className="product-thumb">
        {product.images.length > 0 && (
          <img
            src={product.images[0]}
            alt={product.name}
            width="250"
          />
        )}
      </div>
    <h2>{product.name}</h2>
    { product.description && <p>{product.description}</p> }
    <div>
      <ul>
        <li>
          <span className="product-price">
            { (Number(price.unit_amount_decimal) / 100).toFixed(2) }
            { price.currency.toUpperCase() }
          </span>
        </li>
        {showDetails && (
          <li>
            <Link href={product.id}>
              <a>show details</a>
            </Link>
          </li>
        )}
        <li>
          <Checkout
            productId={product.id}
            priceId={price.id}
          />
        </li>
      </ul>
    </div>
  </div>
)


export default Product;
