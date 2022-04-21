import React from 'react';
import {connect} from 'react-redux';
import Costumbutton from '../costumbutton/costumbutton';
import {AddItem} from '../../Redux/cart/cart.action'
import './collection-item.scss';

const  collectionItem= ( {item,AddItem} )=> {
  const {price,imageUrl,name} = item;
  return ( 
    <div className='collection-item'>
        <div className='image'
          style={{
            backgroundImage:`url(${imageUrl})`
          }}
        />
          <div className='collection-footer'>
            <span className='name'>{ name }</span> 
            <span className='price'>{ price }</span> 
          </div>
          <Costumbutton className='custom-button' inverted onClick={()=> AddItem(item)}>Add to Cart</Costumbutton>
    </div>
  )
}

const mapDispatchToProps=dispatch=>({
  AddItem: item=>dispatch(AddItem(item))
})


export default connect(null,mapDispatchToProps)(collectionItem);