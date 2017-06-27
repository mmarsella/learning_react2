import React, {Component} from 'react';
import './todo.css';

class Todo extends Component {
  render(){
    return(
      <div className="todo">
        <span>{this.props.text}</span>
        <span className='closeBtn' onClick={this.props.remove}>X</span>
      </div>
    )
  }
}

export default Todo;