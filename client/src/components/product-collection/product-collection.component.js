import React from 'react';
import './product-collection.styles.scss';
import ProductCollectionItem from 'components/product-collection-item/product-collection-item.component';
import productCollectionsDummy from 'dummies/productCollectionsDummy';

const CollectionPage = ({ match }) => {
  const collectionId = match.params.collectionId;

  return (
    <div className="product-collection-page">
      <h2 className="title">{collectionId.toUpperCase()}</h2>
      <div className="items">
        {productCollectionsDummy[collectionId].map((item) => (
          <ProductCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
