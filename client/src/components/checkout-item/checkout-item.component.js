import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItem, deleteItem } from 'redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, decreaseItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const handleAddingItem = (cartItem) => () => addItem(cartItem);
  const handleDecreasingItem = (cartItem) => () => decreaseItem(cartItem);
  const handleDeletingItem = (cartItem) => () => deleteItem(cartItem);

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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
