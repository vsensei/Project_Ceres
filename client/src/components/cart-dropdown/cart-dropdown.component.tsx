import React from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import redux, { Action } from 'redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import './cart-dropdown.styles.scss';

type Item = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  quantity: number;
};

type PathParamsType = {
  param1: string;
};

type Props = RouteComponentProps<PathParamsType> & {
  cartItems: Array<Item>;
  history: any;
  toggleCartHidden: Function;
};

const CartDropDown: React.FC<Props> = ({
  cartItems,
  history,
  toggleCartHidden,
}) => {
  const goToCart = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCart}>GO TO CART</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Action>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartDropDown));
