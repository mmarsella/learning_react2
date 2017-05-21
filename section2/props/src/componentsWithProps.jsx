import React, {Component} from 'react';

export default class App extends Component {
  render() {
    var instList = this.props.instructors.map(function(instructor) {
      return (
        <li key={instructor.id}>
            <h2>{instructor.name}</h2>
            <img src={instructor.avatar} alt={instructor.name}/>
            <p><strong>Hobby:</strong> {instructor.hobby}</p>
        </li>
      );
    });
    return (
      <div>
        <h1>Instructors</h1>
        <ul>
          {instList}
        </ul>
      </div>
    );
  }
}

// Specifies the default values for props:
App.defaultProps = {
  instructors: [
    {
      id: 0,
      name: "Tim",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/tim.jpg",  
      hobby: "sailing"
    },
    {
      id: 1,
      name: "Matt",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/matt.jpg",
      hobby: "math"
    },
    {
      id: 2,
      name: "Elie",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/elie.jpg",
      hobby: "violin"
    },
    {
      id: 3,
      name: "Whiskey",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg",
      hobby: "napping"
    }
  ]
};
