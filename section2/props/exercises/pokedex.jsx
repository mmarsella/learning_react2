import React, {Component} from 'react';
import Pokemon from './pokemon.jsx';  // Import a Pokemon component

// Here, we want to create a Pokemon Component for as many
// pokemon we include in our defaultProps.  We can map over all of the
// Pokedex props and make an array of Pokemon Components and embed in the Pokedex Component 
class Pokedex extends Component{
  render(){
    let allPokemon = this.props.pokemon.map(function(el,i){
      return  <Pokemon
                name={el.name}
                type={el.type}
                img={el.img}
                key={el.id}
              />
    });

    console.log('allPokemon', allPokemon)
    return(
      <div>
        {allPokemon}
      </div>
    )
  }
}


Pokedex.defaultProps = {

  pokemon:[
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ]

};

export default Pokedex