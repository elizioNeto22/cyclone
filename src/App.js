import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Header from './components/header/header_component'
import HomePage from './pages/homepage/homepage_component'
import ShopPage from './pages/shop/shop_component'
import './App.css'


class App extends React.Component {
  NoMatch = () =>(
    <div>
      <h1>Página não Encontrada</h1>
      <Link to='/'>Home</Link>
    </div>)

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route component={this.NoMatch} />

        </Switch>
  
      </div>
    )
  }
}

export default App