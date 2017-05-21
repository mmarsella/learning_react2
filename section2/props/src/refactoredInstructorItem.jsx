import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class InstructorItem extends Component {
   render() {
     return (
        <li>
          <h2>{this.props.name}</h2>
          <img src={this.props.avatar} alt={this.props.name}/>
          <p><strong>Hobby:</strong> {this.props.hobby}</p>
        </li>
      );
   }
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  hobby: PropTypes.string
};

