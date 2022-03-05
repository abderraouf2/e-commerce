import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss';
import { connect } from 'react-redux';
import {selectDirectorySection} from '../../Redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect'

const directory =({ sections })=> {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }

  const mapStateToProps= createStructuredSelector({
    sections : selectDirectorySection
  })

export default connect(mapStateToProps)(directory);



