import React from "react";
import Costumbutton from "../costumbutton/costumbutton";
import './cart-dropdown.scss';

const Cart =()=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Costumbutton>Go  to check out</Costumbutton>
    </div>
  )

}
export default Cart;