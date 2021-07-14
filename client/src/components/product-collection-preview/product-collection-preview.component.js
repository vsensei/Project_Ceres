import React from 'react';
import ProductCollection from 'components/shared/product-collection/product-collection.component';

const ProductCollectionPreview = ({ title, items }) => (
  <ProductCollection
    title={title}
    productCollection={items.filter((item, index) => index < 4)}
  />
);

export default ProductCollectionPreview;
