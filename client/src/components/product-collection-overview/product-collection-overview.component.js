import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductCollectionPreview from 'components/product-collection-preview/product-collection-preview.component';
import { selectCollectionsForPreview } from 'redux/shop/shop.selectors';
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
});

export default connect(mapStateToProps)(ProductCollectionOverview);
