import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import ProductCollectionOverview from 'components/product-collection-overview/product-collection-overview.component';
import ProductCollectionFull from 'components/product-collection-full/product-collection-full.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
