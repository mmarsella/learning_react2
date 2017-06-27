import React, {Component} from 'react';
import Todo from './todo';
import Button from './button';
import NewTodoForm from './NewTodoForm';
 
class TodoList extends Component{

  constructor(props){
    super(props);

    this.state = {
      todos: [{text: "A test todo"}, {text: "Another one"}],
      newTodo: ''
    }
  }

  removeTodo(idx){
    console.log('idx:', idx);
    let todos = this.state.todos;
    let newTodos = todos.slice(0, idx).concat(todos.slice(idx+1));
    this.setState({
      todos: newTodos
    })
  }

  addRandomTodo(){ 

    console.log('ADDING')
    let todos = this.state.todos;
      
    console.log('todos', todos);
    let randomTodo = {text:"A new random todo"}

    todos.push(randomTodo);

    this.setState({
      todos: todos
    })
  }

  // Add the newTodo to the todo array
  handleSubmit(e){
    e.preventDefault();
    console.log('handling submit', e);
    console.log('handling submit', e.target);
    let todos = this.state.todos;
      
    console.log('todos', todos);
    let newTodo = {text:this.state.newTodo};

    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo: ''
    })
  }

  handleChange(e){
    console.log('handling change', e.target);
    console.log('handling change', e);
    this.setState({[e.target.name]: e.target.value})
  }





  render(){

    // Could write this with ES6 syntax to preserve this
    // or capture an instance of it here
    var that = this;
    console.log('THIS:', this);
    let todos = this.state.todos.map(function(el, idx){
      console.log('this inside:', this);
      return <Todo text={el.text} remove={that.removeTodo.bind(that,idx)} key={idx}></Todo>
    });

    return(
      <div className="todoList">
        {todos}
        <NewTodoForm 
          newTodo={this.state.newTodo} 
          handleChange={this.handleChange.bind(this)} 
          handleSubmit={this.handleSubmit.bind(this)}
        >
        </NewTodoForm>

      </div>
    )
  }
}

export default TodoList;