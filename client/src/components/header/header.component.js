import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const user = 'y';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div
        className="logo"
        style={{ backgroundImage: `url('images/logo.svg')` }}
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
        <Link className="option" as="div" to="/signout">
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <div className="cart-icon">
        <div
          className="cart-logo"
          style={{ backgroundImage: `url('images/cart.svg')` }}
        ></div>
        <span className="cart-item-count">0</span>
      </div>
    </div>
  </div>
);

export default Header;
