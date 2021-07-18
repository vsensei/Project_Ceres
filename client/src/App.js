import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import CheckoutPage from 'pages/checkout/checkout.component';
import SignUpPage from 'pages/signup/signup.component';
import SignInPage from 'pages/signin/signin.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
