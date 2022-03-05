import React from 'react';
import './collection-overview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';
import Preview from '../preview/preview';

const collectionOverview= ({collections}) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
          <Preview key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}
const mapStateToProps= createStructuredSelector({
  collections:selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(collectionOverview);
