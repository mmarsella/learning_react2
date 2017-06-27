import React, {Component} from 'react';
import TodoList from './todolist';
import './app.css'
 
class AppTwo extends Component{
  render(){
    return(
      <div className="App">
        <TodoList></TodoList>
      </div>
    )
  }
}

export default AppTwo;