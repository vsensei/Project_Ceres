import React from 'react';
import './cart-item.styles.scss';

type Props = {
  item: {
    imageUrl: string;
    price: number;
    name: string;
    quantity: number;
  };
};

const CartItem: React.FC<Props> = ({
  item: { imageUrl, price, name, quantity },
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
