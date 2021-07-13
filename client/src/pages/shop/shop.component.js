import React from 'react';
import { Route } from 'react-router-dom';
import ProductCollectionOverview from 'components/product-collection-overview/product-collection-overview.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={ProductCollectionOverview}
      />
      {/*<Route
        path={`${match.path}/:collectionId`}
        component={ProductsCollectionPageContainer}
      />*/}
    </div>
  );
};

export default ShopPage;
