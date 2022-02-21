import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../Redux/shop-page/shop_page.selector';
import './collections.scss';
import Preview from '../preview/preview';

const collection=({collections})=> {
  return (
    <div className='collection-overview'>
      {
          collections.map(({id, ...otheCollectionProps})=>(<Preview key={id} {...otheCollectionProps}/>))
        }
    </div>
  )
}

const mapStateToprops=createStructuredSelector({
  collections : selectCollections
  })

export default connect(mapStateToprops)(collection);