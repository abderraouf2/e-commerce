import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom';
import Collection from '../collection/collection';
import {isCollectionsFetching,isCollectionLoaded} from '../../Redux/shop/shop.selector'
import { fetchcollectionsStartAsync } from '../../Redux/shop/shop.actions'

import { connect } from 'react-redux';
import WithSpinner from '../../components/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)






class shop extends React.Component {

  
   componentDidMount() {
      const {fetchcollectionsStartAsync} = this.props;
      fetchcollectionsStartAsync();
  }

  render(){
    const { match,isCollectionsFetching,isCollectionLoaded } =  this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}  />} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: isCollectionsFetching,
  isCollectionLoaded: isCollectionLoaded
})

const mapDispatchToProps= dispatch=>({
  fetchcollectionsStartAsync: ()=>dispatch(fetchcollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(shop);