import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from 'components/cart/cart.component';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import './header.styles.scss';

const Header = ({ signOutStart, user }) => {
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
        <Cart />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
