import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import {cartTotal} from '../../Redux/cart/cart.selectors' ;
import CheckoutItem from '../checkoutItem/checkoutItem';
import StripeButton from '../stripeButton/stripeButton';

const checkout= ({cartItems,total}) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className="total">
        <span>Total : ${total}</span>
      </div>
      <div className="test-warning">*Please use the following test card payment*
      <br />
      4242 4242 4242 4242 - Exp: 12/23 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartTotal
})

export default connect(mapStateToProps)(checkout);
