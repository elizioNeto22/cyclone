import React from 'react'
import SECTIONS_DATA from './sections.data'
import MainItem from '../main_item/main_item_component'
import './main_container_styles.scss'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  // this.state.sections.map(({id, title, imageUrl,linkUrl, size}) =>  
  //   <MainItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
  // ↑↑ Como as keys tem o msm property name por isso o spread ↓↓↓ o id está separado porque a key !== id 
  render() {
    return (
      <div className='main-container'>
              {this.state.sections.map(({id, ...MainContainerProps}) =>
          <MainItem key={id} {...MainContainerProps} />
        )}
      </div>
    );
  }
}

export default MainContainer