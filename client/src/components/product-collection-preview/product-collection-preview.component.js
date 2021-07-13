import React from 'react';
import ProductCollectionItem from 'components/product-collection-item/product-collection-item.component';
import './product-collection-preview.styles.scss';

const ProductCollectionPreview = ({ title, productCollection }) => (
  <div className="product-collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {productCollection
        .filter((item, index) => index < 4)
        .map((item) => (
          <ProductCollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ProductCollectionPreview;
