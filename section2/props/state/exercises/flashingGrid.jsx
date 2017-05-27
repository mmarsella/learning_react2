import React, {Component} from 'react'
import {render} from 'react-dom'
import './flashingGrid.css'

class Panel extends Component{
	render(){
		const style = {
			width: '100px',
			height: '100px',
			display: 'inline-block',
			backgroundColor: this.props.color
		}
		return <div className="panel" style={style}></div>
	}
}

class App extends Component{
	constructor(props){

		// if we want props passed down to this component from a parent component
		super(props); 

		var randomColors = ["blue", "red", "green", "yellow"];

		var panels = [];

		for(var i=0; i<24; i++){

			panels.push({id: i, color: randomColors[0]});
		}

		this.state = {panels}

		console.log("STATE", this.state)
		//need to fig out how to target a random child component w/ this
		setInterval(() => {
			const newPanels = this.state.panels.slice(); // create copy
			const randomPanelIndex = Math.floor(Math.random() * newPanels.length);
			const colorIndex = Math.floor(Math.random() * randomColors.length);
			const randomColor = randomColors[colorIndex];
			newPanels[randomPanelIndex].color = randomColor;

			//Functions that call setState should be pure functions.
			this.setState({
				panels: newPanels
			})
		}, 300);
	}

	render(){

		const panels = this.state.panels.map(function(el){
			return <Panel key={el.id} color={el.color} />
		})



		return (
			<div className="App"> {panels} </div> 
			)
	}
}

export default App

