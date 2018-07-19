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
    let target = todos.find(item => item.id === viewId);
    target.isComplete = !target.isComplete;
    this.setState({todos});
  }

  changeContent = (newId,newName) => {
    let todos = this.deepCopy(this.state.todos);
    todos.find(item => item.id === newId).name = newName; 
    this.setState({todos});
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
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

        <InputList />
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
