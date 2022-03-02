import React from 'react';
import './category.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCategory } from '../../Redux/shop-page/shop_page.selector';

 const category=({category})=> {
const {title, items} = category;
console.log(title);
  return (
    <div className='category'>
        <h2 className='title'>{title}</h2>
        <div className="items">
          {
            items.map(item=> <CollectionItem key={item.id} item={item}/>)
          }
        </div>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>({
  category:selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(category);
