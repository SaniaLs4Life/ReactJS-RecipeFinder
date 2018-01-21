import React, { Component } from 'react'
import SearchRecipes from './components/SearchRecipes'
import RecipeList from './components/RecipeList'


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <SearchRecipes />
            <RecipeList />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App
