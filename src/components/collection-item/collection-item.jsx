import React from 'react';
import {connect} from 'react-redux';
import {AddItem} from '../../Redux/cart/cart.action'
import './collection-item.scss';
import { Link } from 'react-router-dom';

const  collectionItem= ( {item,AddItem} )=> {
  const {price,imageUrl,name} = item;
  return ( 
    <Link className='collection-item' to={{pathname:`/ItemPage/${item.name}`, state:{ item:item }}}>
        <div className='image'
          style={{
            backgroundImage:`url(${imageUrl})`
          }}
        />
          <div className='collection-footer'>
            <span className='name'>{ name }</span> 
            <span className='price'>{ price }</span> 
          </div>
    </Link>
  )
}

const mapDispatchToProps=dispatch=>({
  AddItem: item=>dispatch(AddItem(item))
})


export default connect(null,mapDispatchToProps)(collectionItem);