import React from 'react';
import { Route } from 'react-router-dom';
import ProductCollectionOverview from 'components/product-collection-overview/product-collection-overview.component';
import ProductCollectionFull from 'components/product-collection-full/product-collection-full.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={ProductCollectionOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={ProductCollectionFull}
      />
    </div>
  );
};

export default ShopPage;
