import React, {Component} from 'react';
import InstructorItem from './InstructorItem';

export default class App extends Component {
  render() {
    var instList = this.props.instructors.map(function(instructor) {
      return (
        <InstructorItem key={instructor.id}
                        name={instructor.name}
                        avatar={instructor.avatar}
                        hobby={instructor.hobby} />
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