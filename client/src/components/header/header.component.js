import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDropDown from 'components/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import './header.styles.scss';

const Header = ({
  cartHidden,
  toggleCartHidden,
  signOutStart,
  itemCount,
  user,
}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div
        className="logo"
        style={{ backgroundImage: `url('/images/logo.svg')` }}
      />
    </Link>
    <div className="options-container">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {user ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <div className="cart-icon" onClick={toggleCartHidden}>
        <div
          className="cart-logo"
          style={{ backgroundImage: `url('/images/cart.svg')` }}
        ></div>
        <span className="cart-item-count">{itemCount}</span>
      </div>
    </div>
    {!cartHidden ? <CartDropDown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  cartHidden: selectCartHidden,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
