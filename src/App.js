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

  changeStatus = (status) => {
    this.setState({status})
  }

  changeCheck = (viewId) => {
    let todos = this.deepCopy(this.state.todos);
    todos.find(item => item.id === viewId).isComplete = !todos.find(item => item.id === viewId).isComplete
    this.setState({todos});
  }

  changeContent = (newId,newName) => {
    let todos = this.deepCopy(this.state.todos);
    todos.find(item => item.id === newId).name = newName; 
    this.setState({todos});
  }

  addItem = (name) => {
    let todos = this.deepCopy(this.state.todos);
    todos.push({id:this.generateUUID(),name,isComplete:false});
    this.setState({todos});
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  generateUUID=()=> {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

  filerByStatus = (status) =>{
    if (status === 'all') {
      return this.state.todos;
    }else if(status === 'active'){
      return this.state.todos.filter(item => !item.isComplete);
    }else{
      return this.state.todos.filter(item => item.isComplete);
    } 
  }


  render() {
    return (
      <div className="container">
        <Header />

        <InputList addHandler={this.addItem}/>
        <br/>

        <div className="ListContent"> 
          <ol>
            {
              this.filerByStatus(this.state.status).map( item => 
                <ListContent
                  todos={item} 
                  toggleActiveHandler={this.changeCheck}
                  updateItemContent={this.changeContent}
                />
              )
            }
          </ol>
        </div>
            

        <FilterList status={this.state.status} changeStatusHandler={this.changeStatus}/>
      </div>
    );
  }
}

export default App;
