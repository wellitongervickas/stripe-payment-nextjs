import React from 'react';
import Stripe from 'stripe';


interface Props {
    product: Stripe.Product
    price: Stripe.Price,
}

const Product: React.FC<Props> = ({ product, price }) => (
    <div>
        {product.images.length > 0 && (
            <img 
                src={product.images[0]} 
                alt={product.name} 
                width="250"
            />
        )}
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p> }
        <div>
            <h3>Details</h3>
            <ul>
                <li>
                    <b>Price:</b> 
                    <span>
                        { (Number(price.unit_amount_decimal) / 100).toFixed(2)} 
                        { price.currency.toUpperCase() }
                    </span>
                </li>
            </ul>
        </div>
    </div>
)


export default Product;