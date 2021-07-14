import React from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/cart.actions';
import './product-collection-item.styles.scss';

const ProductCollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const handleAddItem = (item) => () => addItem(item);

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={handleAddItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductCollectionItem);
