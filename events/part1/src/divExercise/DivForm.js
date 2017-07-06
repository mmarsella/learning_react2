import React, {Component} from 'react';

class DivForm extends Component{
  render(){
    return(
        <form onSubmit={this.props.handleSubmit} className="divForm">
          <div>
            <label>Height</label>
            <input name="height" onChange={this.props.handleChange} value={this.props.height} ref={ip=> this.height= ip}></input>
          </div>

          <div>
            <label>Width</label>
            <input name="width" onChange={this.props.handleChange} value={this.props.width}></input>
          </div>

          <div>
            <label>Background</label>
            <input name="background" onChange={this.props.handleChange} value={this.props.background}></input>
          </div>
          <div>
            <input type="submit" value="Add a div" />
          </div>
        </form>
    )
  }
}

export default DivForm;