import React from 'react';
import ProductCollection from 'components/shared/product-collection/product-collection.component';

const ProductCollectionPreview = ({ title, productCollection }) => (
  <ProductCollection
    title={title}
    productCollection={productCollection.filter((item, index) => index < 4)}
  />
);

export default ProductCollectionPreview;
