import React from 'react';
import './collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection  } from '../../Redux/shop/shop.selector';

const collection=({collection})=> {
  const {title, items} =collection;
  console.log(collection);
  return (
    <div className='collection'>
      <h2 className='title'>{title}</h2>
        <div className="items">
          {
            items.map(item=> (
            <CollectionItem key={item.id} item={item} />
            ))
          }
        </div>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>({
  collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(collection);
