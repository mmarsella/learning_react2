import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Tim"
    };


    var changeName = function() {
      this.setState({name: "Mark"});
    };

    setTimeout(changeName.bind(this), 5000);
  }



  render(){
    return (
      <div>
        <h2>Our state is {this.state.name}</h2>
      </div>
    );
  }
}

render(<App/>, document.getElementById("root"));