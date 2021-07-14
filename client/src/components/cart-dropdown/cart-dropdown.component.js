import React from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import CartItem from 'components/cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import productCollections from 'dummies/productCollectionsDummy';
import { connect } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

const CartDropDown = ({ history, toggleCartHidden }) => {
  const cartItems = productCollections.soup;
  const goToCart = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCart}>GO TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(withRouter(CartDropDown));
