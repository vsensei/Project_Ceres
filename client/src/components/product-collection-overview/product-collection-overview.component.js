import React from 'react';
//import './collections-overview.styles.scss';
import ProductCollectionPreview from 'components/product-collection-preview/product-collection-preview.component';
import productCollection from 'dummies/productsCollectionDummy';

const ProductCollectionsOverview = () => (
  <div className="collections-overview">
    {productCollection['pasta'].map(({ id, ...otherCollectionProps }) => (
      <ProductCollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default ProductCollectionsOverview;
