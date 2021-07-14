import React from 'react';
import ProductCollectionItem from 'components/product-collection-item/product-collection-item.component';
import './product-collection.styles.scss';

const ProductCollection = ({ title, productCollection, subClass }) => (
  <div className="product-collection-container">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className={`product-collection${subClass ? ' ' + subClass : ''}`}>
      {productCollection.map((item) => (
        <ProductCollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default ProductCollection;
