import React, { Component } from 'react';
import './App.css';
import MoviesSearcher from './moviesSearcher'
import moviesAdapter from './moviesAdapter'
class App extends Component {
  render() {
    // Mocking a default search term
    return <MoviesSearcher initialSearchTerm={'The Phantom Menace'} apiAdapter={moviesAdapter}/>
  }
}

export default App;
