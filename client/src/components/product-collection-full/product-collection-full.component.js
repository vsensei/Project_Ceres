import React from 'react';
import productCollectionsDummy from 'dummies/productCollectionsDummy';
import ProductCollection from 'components/shared/product-collection/product-collection.component';
import { connect } from 'react-redux';
import { selectCollection } from 'redux/shop/shop.selectors';

const ProductCollectionFull = ({ collection }) => {
  const { title, items } = collection;

  return (
    <ProductCollection
      title={title.toUpperCase()}
      productCollection={items}
      subClass="full"
    />
  );
};

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ProductCollectionFull);
