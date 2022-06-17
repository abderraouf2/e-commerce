import React from 'react';
import './collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/shop/shop.selector';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.style';

const collection=({collection})=> {
  const {title, items} =collection;
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps=( state , ownProps )=>({
  collection : selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(collection);
