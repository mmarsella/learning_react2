import React, {Component} from 'react'
import {render} from 'react-dom'
import './flashingGrid.css'

class Panel extends Component{
	render(){
		return <div className="panel" style={this.props.style}>
		</div>
	}
}

class App extends Component{
	constructor(props){
		super(props);

		var randomColors = ["blue", "red", "green", "yellow"];
		this.state = {
			style: {"backgroundColor": randomColors[Math.floor(Math.random() * randomColors.length)]}
		}


		var changeColor = function(){
			this.setState({style: {"backgroundColor": randomColors[Math.floor(Math.random() * randomColors.length)]}})
		}

		setInterval(changeColor.bind(this), 300);
	}

	render(){

		let panels = [];
		var subPanel = [];

		for(var i=0; i<24; i++){
			
			if(i % 6 === 0){

			}
			panels.push(<Panel 
										style={this.state.style}
										key={i}
									/>)
		}

		return <div> {panels} </div> 
	}
}

export default App