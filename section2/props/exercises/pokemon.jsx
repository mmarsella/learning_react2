import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';  // need to add a CSS loader to my webpack.config for this to work


class Pokemon extends Component{
  render(){
    return(
      <div className="pokeCard">
        <h4 className="pokeTitle"> {this.props.name} </h4> 
        <img className="pokeImg" src={this.props.img}/>
        <p className="pokeType">Type: {this.props.type}</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name:PropTypes.string,
  img:PropTypes.string,
  type:PropTypes.string
}

export default Pokemon;