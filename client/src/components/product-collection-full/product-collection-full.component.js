import React from 'react';
import ProductCollection from 'components/shared/product-collection/product-collection.component';
import { connect } from 'react-redux';
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from 'redux/shop/shop.selectors';
import WithSpinner from 'components/shared/with-spinner/with-spinner.component';
import { compose } from 'redux';

const ProductCollectionFull = ({ collection }) => {
  return (
    <>
      {collection ? (
        <ProductCollection
          title={collection.title.toUpperCase()}
          productCollection={collection.items}
          subClass="full"
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state),
  isLoading: !selectIsCollectionsLoaded(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductCollectionFull);
