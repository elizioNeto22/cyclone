import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSections } from '../../redux/main-container/main-container.selectors'
import MainItem from '../main_item/main_item_component'

import './main_container_styles.scss'

const MainContainer = ({ sections }) => {
  return (
    <div className="main-container">
      {sections.map(({ id, ...MainContainerProps }) => (
        <MainItem key={id} {...MainContainerProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
})

export default connect(mapStateToProps)(MainContainer)
