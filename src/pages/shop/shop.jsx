import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection'

const shop  =({match})=> {
  console.log(match)
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }




export default shop;