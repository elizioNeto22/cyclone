import React from 'react'

import MainContainer from '../../components/main_container/main_container_component'
import { HomepageContainer } from './homepage.styles'

const HomePage = () => (
  <HomepageContainer isMobile={false} className="homepage">
    <MainContainer />
  </HomepageContainer>
)

export default HomePage
