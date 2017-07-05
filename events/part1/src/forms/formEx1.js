import React, { Component } from 'react';
// import { render } from 'react-dom';


/* Basic Use of Controlled Components */

// class Murk extends Component {

//   constructor(props) {
//     console.log('running here!')
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {

//     console.log('[e.target.name]', [e.target.name])
//     console.log('[e.target.value]', [e.target.value])
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   render(){
//     let greeting = this.state.firstName && this.state.lastName ?
//       `Hello, ${this.state.firstName} ${this.state.lastName}!` :
//       "I don't know your full name :(";

//     return (
//         <div>
//           <h1>Please tell me your name.</h1>
//           <input
//             onChange={this.handleChange}
//             placeholder="What's your first name?"
//             name="firstName"
//             value={this.state.firstName}
//           />
//           <input
//             onChange={this.handleChange}
//             placeholder="What's your last name?"
//             name="lastName"
//             value={this.state.lastName}
//           />
//           <p>{greeting}</p>
//         </div>
//     );
//   }
// }


/* More Detailed Example */

// class Murk extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       food: '',
//       quantity: '0',
//       ordered: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({
//       ordered: true
//     });
//   }

//   render(){
//     let orderForm =
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label>
//             Food
//             <input
//               onChange={this.handleChange}
//               placeholder="What food would you like?"
//               name="food"
//               value={this.state.food}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Quantity
//             <select
//               value={this.state.quantity}
//               onChange={this.handleChange}
//               name="quantity"
//             >
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//           </label>
//         </div>
//         <input type="submit" value="Place your order"/>
//       </form>

//     let orderReceived =
//       <div>
//         <h3>Order received!</h3>
//         <p>Food: {this.state.food}</p>
//         <p>Quantity: {this.state.quantity}</p>
//         <p>Coming right up!</p>
//       </div>

//     let visibleElement = this.state.ordered ? orderReceived : orderForm;

//     return (
//       <div>
//         <h1>What would you like to eat?</h1>
//         {visibleElement}
//       </div>
//     );
//   }
// }

/* Example using state where we could use REFS */

class Murk extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        pin: '',
        error: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.pin === '1234') {
      alert("Thanks for the pin!")
      this.setState({pin: ''})
    } else {
      this.setState({pin: '', error: true})
    }
  }

  handleChange(e) {
    this.setState({pin: e.target.value, error: false})
  }

  render(){
    let error = (this.state.error) ?
      <p>Wrong. Please Try again.</p> :
      null;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter your pin:</label>
        <input type="text" value={this.state.pin} onChange={this.handleChange}/>
        <button type="submit">Enter</button>
        {error}
      </form>
    )
  }
}

/* Same example but usings REFS */

class Murk extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        pin: '',
        error: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addFocus = this.addFocus.bind(this);
  }

  addFocus() {
    this.input.focus();
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.pin === '1234') {
      alert("Thanks for the pin!")
      this.setState({pin: ''})
    } else {
      this.setState({pin: '', error: true})
      this.addFocus();
    }
  }

  handleChange(e) {
    this.setState({pin: e.target.value, error: false})
  }

  render(){
    let error = (this.state.error) ?
      <p> Wrong. Please Try again.</p> :
      null;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter your pin:</label>
        <input type="text"
          value={this.state.pin}
          onChange={this.handleChange}
          ref={el => this.input = el}
        />
        <button type="submit">Enter</button>
        {error}
      </form>
    )
  }
}

export default Murk;
