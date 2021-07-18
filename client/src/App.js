import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import CheckoutPage from 'pages/checkout/checkout.component';
import SignUpPage from 'pages/signup/signup.component';
import SignInPage from 'pages/signin/signin.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import './App.scss';

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const routeRender = (Component) => () =>
    currentUser ? <Redirect to="/" /> : Component;

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signup" render={routeRender(<SignUpPage />)} />
        <Route exact path="/signin" render={routeRender(<SignInPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
