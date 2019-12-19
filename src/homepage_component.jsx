import React from 'react'
import './homepage_styles.scss'


const Homepage = () => (
  <div className="homepage">
    <h1>Bem Vindo a Homepage</h1>
    <main className="main-wrapper">

      <div className="main-item">
        <div className="main-item-content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="main-item">
        <div className="main-item-content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="main-item">
        <div className="main-item-content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="main-item">
        <div className="main-item-content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="main-item">
        <div className="main-item-content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
            
    </main>
  </div>
)

export default Homepage