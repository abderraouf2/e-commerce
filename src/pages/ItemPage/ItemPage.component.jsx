import React from 'react';
import { useLocation } from 'react-router-dom';
import { Div, Title, Desc, Details, P } from './ItemPage.style';
import {connect} from 'react-redux';
import Costumbutton from '../../components/costumbutton/costumbutton';
import {AddItem} from '../../Redux/cart/cart.action'




const  ItemPage = ({AddItem}) => {
  
   const item = useLocation().state.item;
  return (
    <Div>
      <img width='auto' src={item.imageUrl} alt="" />
      <Details>
        <Desc>
          <Title>{item.name}</Title>
          <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus officia id aliquid suscipit maiores, dolor laborum molestias fugit? Commodi, qui animi laboriosam similique odit perspiciatis fuga libero sunt dolore excepturi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquid harum placeat voluptatum molestiae nobis laborum ipsum quibusdam ipsam ad suscipit rerum sunt, fugit possimus eveniet eum accusantium, sapiente nostrum!</P>
        </Desc>
      <Costumbutton className='custom-button' inverted onClick={()=> AddItem(item)}>Add to Cart</Costumbutton>
      </Details>
    </Div>
  )
}
const mapDispatchToProps=dispatch=>({
  AddItem: item=>dispatch(AddItem(item))
})
export default connect(null,mapDispatchToProps)(ItemPage);

