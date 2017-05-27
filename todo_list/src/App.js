import React, { Component } from 'react';
import Todo from './todo.jsx';
import './App.css';

class App extends Component {
    constructor(props){
      // if we want props passed down to this component from a parent component
      super(props);

      console.log("PROPS", props)

      let todos = props.tasks.map(function(el,i){
        return {id:i, task:el}
      })

      console.log('todos now', todos);

      this.state = {todos}


    }
  render() {

    const todosList = this.state.todos.map(function(t){ 
      return <Todo key={t.id} task={t.task}/>
    });


    return (
      <div className="App">
      <h1> Todo List </h1>
        {todosList}
      </div>
    );
  }
}

App.defaultProps = {
  tasks: [
  "Mow the lawn",
  "Feed the dog",
  "Clean my room",
  "blah blah blah"

  ]
}

export default App;
