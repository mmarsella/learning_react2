import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink';
import Button from './Button';

class App extends Component {

  constructor(props){
    super(props)

    var origLinks = [{name:'google', url: 'https://www.google.com'}, {name:'yahoo', url:'https://www.yahoo.com'}, {name:'macys', url:'https://www.macys.com'}]; 

    this.state = {
      links: origLinks,
      disabled: false,
      buttonText: this.disabled ? "Enable" : "Disable" 
    }
    
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e){
    if(this.state.disabled){
      console.log('preventing default!');
      e.preventDefault();
    }  
  }

  disableLinks(){
    this.setState({
      disabled: !this.state.disabled,
      buttonText: this.state.disabled ? "Disable" : 'Enable'
    }, function(){
      console.log('callback after set state:', this.state)
    })
  }


  render() {
    let links = this.state.links.map((el,idx) => (
        <CustomLink
          text={el.name}
          link={el.url}
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
