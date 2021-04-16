import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import ProductList from './components/Products/ProductList';
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>

          </div>
        </div>
      </Router>

    );
  }
  showContentMenus = (routes) =>{
    let result = null;
    if(routes.length > 0){
      result = routes.map((route,index) =>{
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component = {route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}
