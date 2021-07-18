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
}) => {
  const OptionLink = ({ link, label = link }) => {
    if (link === '/')
      return (
        <Link className="logo-container" to="/">
          <div
            className="logo"
            style={{ backgroundImage: `url('/images/logo.svg')` }}
          />
        </Link>
      );

    return (
      <Link className="option" to={`/${link}`}>
        {label.toUpperCase()}
      </Link>
    );
  };
  const Option = ({ label, handleClick }) => (
    <div className="option" onClick={handleClick}>
      {label.toUpperCase()}
    </div>
  );

  return (
    <div className="header">
      <OptionLink link="/" />
      <div className="options-container">
        <OptionLink link="shop" />
        <OptionLink link="contact" />
        {user ? (
          <Option label="sign out" handleClick={signOutStart} />
        ) : (
          <>
            <OptionLink link="signin" label="sign in" />
            <OptionLink link="signup" label="sign up" />
          </>
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
};

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
