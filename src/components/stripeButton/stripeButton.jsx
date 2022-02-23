import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton=({price})=>{
  const priceforStripe=price*100;
  const publishableKey= "pk_test_51KWI2FKAyuCRgb4bvGPAaUjf4mS8sIMjx7Dz5NghwJfWfqkTPkXW65B6pLkFf1taxGV3GMIxjAoAnZHQ3dX9A1hy00yQBUcsnv";
  const onToken= token=>{
    console.log(token);
    alert('Payment successful')
  }

  return (
    <StripeCheckout 
      label ="Pay now"
      name = "Raouf's website"
      billingAddress
      shippingAddress
      currency="USD"
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount= {priceforStripe}
      panelLabel= 'Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeButton