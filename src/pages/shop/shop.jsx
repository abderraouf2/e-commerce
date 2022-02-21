import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min'; 

import Collection from '../../components/collections-overview/collection';
import Category from '../category/category';



const shop=({match})=>  {
      return(
    
      <div className='shop-page'>
        <Route exact path={match.path} component={Collection} /> 
        <Route path={`${match.path}/:categoryId`} component={Category} />
      </div>
    )};
  
    

export default shop;