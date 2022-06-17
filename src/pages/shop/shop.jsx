import React from 'react';
import { Route } from 'react-router-dom';

import { fetchcollectionsStartAsync } from '../../Redux/shop/shop.actions'
import { connect } from 'react-redux';

import CollectionContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collectionOverview.container';








class shop extends React.Component {

  
   componentDidMount() {
      const {fetchcollectionsStartAsync} = this.props;
      fetchcollectionsStartAsync();
  }

  render(){
    const { match } =  this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        component={CollectionOverviewContainer}
        />
        <Route path={`${match.path}/:collectionId`} 
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps= dispatch=>({
  fetchcollectionsStartAsync: ()=>dispatch(fetchcollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(shop);