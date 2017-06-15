import React, {Component} from 'react';
import './CustomLink.css';

class CustomLink extends Component{
	render(){
		return(
			<a href={this.props.link} onClick={this.props.handleLink} target="_blank">
				{this.props.text}
			</a>
		) 
	}
}

export default CustomLink;