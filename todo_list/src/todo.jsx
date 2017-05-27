import React, { Component } from 'react';

export default class Todo extends Component{
  render(){
    const style = {
      width: "300px",
      height: "50px",
      backgroundColor: "#F8F8F0",
      marginTop: "5px",
      margin: "0 auto",
      paddingTop: "10px"
    }

    return( 
        <div style={style}>
          <div className="close"> X </div>
          {this.props.task}
        </div>
    )
  }
}