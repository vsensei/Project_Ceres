import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors';
import { clearCart } from 'redux/cart/cart.actions';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import { withRouter } from 'react-router-dom';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, clearCart, history }) => {
  const handleCartClear = () => {
    history.push('/');
    clearCart();
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="cart-clear">
        <CustomButton onClick={handleCartClear} inverted>
          Clear cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CheckoutPage));
