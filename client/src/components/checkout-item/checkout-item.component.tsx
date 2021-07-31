import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItem, deleteItem } from 'redux/cart/cart.actions';
import redux, { Action } from 'redux';
import './checkout-item.styles.scss';

type CartItem = {
  imageUrl: string;
  price: number;
  name: string;
  quantity: number;
};

type Props = {
  cartItem: CartItem;
  addItem: Function;
  decreaseItem: Function;
  deleteItem: Function;
};

const CheckoutItem: React.FC<Props> = ({
  cartItem,
  addItem,
  decreaseItem,
  deleteItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const handleAddingItem = (cartItem: CartItem) => () => addItem(cartItem);
  const handleDecreasingItem = (cartItem: CartItem) => () =>
    decreaseItem(cartItem);
  const handleDeletingItem = (cartItem: CartItem) => () => deleteItem(cartItem);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecreasingItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddingItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleDeletingItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: redux.Dispatch<Action>) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  decreaseItem: (item: CartItem) => dispatch(decreaseItem(item)),
  deleteItem: (item: CartItem) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
