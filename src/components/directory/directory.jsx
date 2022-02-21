import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import {selectDirectorySections} from '../../Redux/directory/directory.selectors'

const directory =({ sections })=>{
   return (
      <div className="directory-menu">
              {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
   )
   }
    

   const mapStateToProps = createStructuredSelector({
     sections: selectDirectorySections
   });

  export default connect(mapStateToProps)(directory);



