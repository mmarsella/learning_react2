import React, {Component} from 'react';

class NewTodoForm extends Component{
  render(){
    return(
      <form onSubmit={this.props.handleSubmit} className="newTodoForm">
        <input name="newTodo" 
              value={this.props.newTodo} 
              onChange={this.props.handleChange}
              placeholder="Add Todo"
              className="newTodoInput"
        ></input>
      </form>

    )
  }
}

export default NewTodoForm;