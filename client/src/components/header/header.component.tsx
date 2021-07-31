import React, { MouseEventHandler } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from 'components/cart/cart.component';
import redux, { Action } from 'redux';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import './header.styles.scss';

type OptionLink = {
  link: string;
  label?: string;
};

type Option = {
  label: string;
  handleClick: MouseEventHandler;
};

type Props = {
  user: Object;
  signOutStart: MouseEventHandler;
};

const Header: React.FC<Props> = ({ signOutStart, user }) => {
  const OptionLink = ({ link, label = link }: OptionLink) => {
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
  const Option = ({ label, handleClick }: Option) => (
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

const mapDispatchToProps = (dispatch: redux.Dispatch<Action>) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
