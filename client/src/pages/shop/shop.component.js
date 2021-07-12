import React from 'react';
import { Route } from 'react-router-dom';
import ProductsCollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
//import ProductsCollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={ProductsCollectionOverviewContainer}
      />
      {/*<Route
        path={`${match.path}/:collectionId`}
        component={ProductsCollectionPageContainer}
      />*/}
    </div>
  );
};

export default ShopPage;
