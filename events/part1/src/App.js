import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink';
import Button from './Button';

class App extends Component {

  constructor(props){
    super(props)

    var origLinks = ['https://www.google.com', 'https://www.yahoo.com', 'https://www.macys.com']; 

    this.state = {
      links: origLinks,
      disabled: false,
      buttonText: this.disabled ? "Enable" : "Disable" 
    }

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }


  handleLinkClick(e){

    if(!this.state.disabled){
      e.preventDefault();
    }
    
    console.log('CLICKED ON:', this.state.disabled)
  }

  disableLinks(){
    console.log("STATE", this.state); 

    let emptyLinks = this.state.links.map((el,idx) => (
      ''
    ))

    this.setState({
      disabled: !this.state.disabled,
      buttonText: this.state.disabled ? "Disable" : 'Enable',
      links: emptyLinks
    }, function(){
      console.log('callback after set state:', this.state)
    })

  }


  render() {

    let links = this.state.links.map((el,idx) => (
        <CustomLink
          text={idx + " mmm"}
          link={el}
          handleLink={this.handleLinkClick}
          key={idx}
        >
        </CustomLink>
    ))

    return (
      <div className="App">
        {links}
        <Button disableLinks={this.disableLinks.bind(this)} buttonText={this.state.buttonText}>  </Button>
      </div>
    );
  }
}

export default App;
