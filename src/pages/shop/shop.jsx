import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection';

import { collection,getDocs,getFirestore } from 'firebase/firestore';
import {convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import { connect } from 'react-redux';
import {updateCollections} from '../../Redux/shop/shop.actions';
import WithSpinner from '../../components/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)






class shop extends React.Component {

  
    state={
      loading : true
    }
  

  unsbscrideFromSnapshot = null;
  
   componentDidMount() {

    const {updateCollections} = this.props; 
    const db = getFirestore();
    const collectionRef= collection(db,'collections');
    getDocs(collectionRef).then(snapshot=>{      
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    updateCollections(collectionsMap);
    this.setState({loading : false}) ;}
    )

  }

  render(){
    const { match } =  this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}  />} />
      </div>
    );
  }
}

const mapDispatchToProps= dispatch=>({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(shop);