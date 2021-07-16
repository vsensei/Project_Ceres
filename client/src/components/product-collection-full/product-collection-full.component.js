import React from 'react';
import ProductCollection from 'components/shared/product-collection/product-collection.component';
import { connect } from 'react-redux';
import { selectCollection } from 'redux/shop/shop.selectors';

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
});

export default connect(mapStateToProps)(ProductCollectionFull);
