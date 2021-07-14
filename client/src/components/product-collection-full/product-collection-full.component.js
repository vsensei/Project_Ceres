import React from 'react';
import productCollectionsDummy from 'dummies/productCollectionsDummy';
import ProductCollection from 'components/shared/product-collection/product-collection.component';

const ProductCollectionFull = ({ match }) => {
  const collectionId = match.params.collectionId;

  return (
    <ProductCollection
      title={collectionId.toUpperCase()}
      productCollection={productCollectionsDummy[collectionId]}
      subClass="full"
    />
  );
};

export default ProductCollectionFull;
