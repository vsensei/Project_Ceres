import React from 'react';
import CartDropDown from 'components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import './cart.styles.scss';

const Cart = ({ itemCount, toggleCartHidden, cartHidden }) => (
  <>
    <div className="header-cart" onClick={toggleCartHidden}>
      <div
        className="header-cart-logo"
        style={{ backgroundImage: `url('/images/cart.svg')` }}
      ></div>
      <span className="header-cart-item-count">{itemCount}</span>
    </div>
    {!cartHidden ? <CartDropDown /> : null}
  </>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
