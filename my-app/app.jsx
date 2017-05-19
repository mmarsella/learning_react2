import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from './person.jsx';


class App extends React.Component{
	render(){
		return( 
				<div>
						<Person 
						name="Mark"
						age={21}
						hobbies={['skating', 'coding']}
						/>

						<Person 
						name="Merv"
						age={17}
						hobbies={['blah', 'cleaning']}
						/>
				</div>
			)
	}
}


ReactDOM.render(<App/>, document.getElementById("app"));