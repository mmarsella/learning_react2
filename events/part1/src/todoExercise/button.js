import React, {Component} from 'react';

class Button extends Component{
  render(){
    return(
      <button className="addButton" onClick = {this.props.addRandomTodo}> 
        Add Random
      </button> 
    )
  }
}

export default Button;