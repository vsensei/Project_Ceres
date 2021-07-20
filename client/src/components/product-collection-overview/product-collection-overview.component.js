import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductCollectionPreview from 'components/product-collection-preview/product-collection-preview.component';
import {
  selectCollectionsForPreview,
  selectIsCollectionFetching,
} from 'redux/shop/shop.selectors';
import WithSpinner from 'components/shared/with-spinner/with-spinner.component';
import { compose } from 'redux';
import './product-collection-overview.styles.scss';

const ProductCollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ProductCollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductCollectionOverview);
