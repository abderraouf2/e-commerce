import React from "react";
import Costumbutton from "../costumbutton/costumbutton";
import CartItem from "../cart-item/cartItem";
import {connect} from 'react-redux';
import { selectCartItems } from "../../Redux/cart/cart.selectors";
import './cart-dropdown.scss';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/cart/cart.action'


const Cart =({cartItems, history,dispatch})=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className="empty-message"> Your cart is empty </span>
        }
      </div>
      
      <Costumbutton onClick={()=>{
        history.push('/checkout')
        dispatch(toggleCartHidden())
        }}>Go  to check out</Costumbutton>
      
    </div>
  )

}

const mapStatetoProps=createStructuredSelector({
  cartItems : selectCartItems,
})


export default withRouter(connect(mapStatetoProps)(Cart));