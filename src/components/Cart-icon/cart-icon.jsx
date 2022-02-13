import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from "../../Redux/cart/cart.action";
import { selectCartItemsCount } from "../../Redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const cartIcon=({toggleCartHidden,itemCount})=>{
  return(
  <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" /> 
      <span className="item-count">{itemCount}</span>
  </div>
  )
}
const mapDispatchtoProps=(dispatch)=>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
  itemCount: selectCartItemsCount 
})

export default connect(mapStateToProps,mapDispatchtoProps)(cartIcon);