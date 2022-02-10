import React from "react";
import Costumbutton from "../costumbutton/costumbutton";
import CartItem from "../cart-item/cartItem";
import {connect} from 'react-redux'
import './cart-dropdown.scss';

const Cart =({cartItems})=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <Costumbutton>Go  to check out</Costumbutton>
    </div>
  )

}

const mapStatetoProps=(state)=>({
  cartItems : state.cart.cartItems,
})

export default connect(mapStatetoProps)(Cart);