import React from 'react';
import CustomButton from 'components/shared/custombutton/custombutton.component';
import './product-collection-item.styles.scss';

const ProductCollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default ProductCollectionItem;
