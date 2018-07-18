import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './todo.css';
import Header from './Component/Header'
import InputList from './Component/InputList'
import ListContent from './Component/ListContent'
import FilterList from './Component/FilterList'

class App extends Component {
  constructor() {
    super();
    this.state ={
      status:'all',
      todos:
        [{
            id:'111232',
            name: 'Parking Lot APP Refactor',
            isComplete:false
        },
        {
            id:'113232',
            name: 'JQQQQQQQ',
            isComplete:true
        }]      
      }   
  }

  showStatus = (status) => {
    this.setState({status})
  }





  render() {
    return (
      <div className="container">
        <Header />
        <InputList />
        <br/>
        <ListContent todoList={this.state.todoList}/>
        <FilterList status={this.state.status} changeStatus={this.showStatus}/>
      </div>
    );
  }
}

export default App;
