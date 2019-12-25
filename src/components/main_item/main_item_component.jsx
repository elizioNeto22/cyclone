import React from 'react'
import {withRouter} from 'react-router-dom'
import './main_item_styles.scss'


// Testar com props e depois voltar para esse
const MainItem = ({title, imageUrl, linkUrl, size, history, match}) =>(
  
  <div className={`${size} main-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
    <div className="main-item-content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)
// Retorna o MainItem com acesso as propriedades do Route(match, history e location props)
export default withRouter(MainItem)
