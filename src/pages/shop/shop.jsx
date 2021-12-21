import React, { Component } from 'react';
import SHOP_DATA from './data';
import Preview from '../../components/preview/preview';


class shop extends Component {
  constructor(){
    super();
    this.state={
      collections:SHOP_DATA,
    }
  }
  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otheCollectionProps})=>(<Preview key={id} {...otheCollectionProps}/>))
        }  
      </div>
    );
  }
}

export default shop;