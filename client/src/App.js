import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Header from 'components/header/header.component';
import Spinner from 'components/shared/with-spinner/spinner/spinner.component';
import './App.scss';

const HomePage = lazy(() => import('pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('pages/checkout/checkout.component'));
const SignUpPage = lazy(() => import('pages/signup/signup.component'));
const SignInPage = lazy(() => import('pages/signin/signin.component'));

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
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signup" render={routeRender(<SignUpPage />)} />
          <Route exact path="/signin" render={routeRender(<SignInPage />)} />
        </Suspense>
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
