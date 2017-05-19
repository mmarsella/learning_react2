class Person extends React.Component{
	render(){

		let ageMsg = (this.props.age >= 21 ? "Have a drink!" : "Not old enough")
		let hobbies = this.props.hobbies.map(function(el,i){ return <li key={i}> {el} </li> })

		return <div>
						<p> Learn some more info about: {this.props.name}</p>

						<p> Hobbies are: </p>

						<ul>
						{hobbies}
						</ul>
						<h4> {ageMsg} </h4>
					 
					 </div> 
	}
}


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