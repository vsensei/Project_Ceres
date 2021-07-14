import React from 'react';
import './product-collection-overview.styles.scss';
import ProductCollectionPreview from 'components/product-collection-preview/product-collection-preview.component';
import productCollectionsDummy from 'dummies/productCollectionsDummy';

const ProductCollectionOverview = () => (
  <div className="collections-overview">
    {Object.entries(productCollectionsDummy).map((productCollection, index) => (
      <ProductCollectionPreview
        title={productCollection[0]}
        productCollection={productCollection[1]}
      />
    ))}
  </div>
);

export default ProductCollectionOverview;
