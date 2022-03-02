import React from 'react';

import {CustomButtonContainer} from './costumbutton.styles'

 const Costumbutton=({children, ...otherProps})=> {
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  )
}
export default Costumbutton

// className={`${ inverted ? 'inverted' : ''} ${ isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
//               {...otherProps}