import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './todo.css';
import Header from './Component/Header'
import InputList from './Component/InputList'
import ListContent from './Component/ListContent'
import FilterList from './Component/FilterList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputList />
        <br/>
        <ListContent />
        <FilterList />
      </div>
    );
  }
}

export default App;
