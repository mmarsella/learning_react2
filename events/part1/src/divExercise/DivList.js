import React, {Component} from 'react';
import DivForm from './DivForm';
// import NewDiv from './NewDiv';

class DivList extends Component{
  constructor(props){
    super(props);


    /* Would like to know how to store all of these in an obj
       like newDiv:{} and only update vals inside of that obj.
    */
    this.state = {
      height:'',
      width:'',
      background:'',
      divs: [{'backgroundColor:red', 'height:100px', 'width:100px'}]
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('SUBMITTED FORM!')
  }

  handleChange(e){
    // console.log('handling change!', e);
    console.log('NAME:', e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  render(){

    let NewDivs = this.state.divs.map(function(el,i){
      return (
        <div 
          style={
            backgroundColor: el.backgroundColor
          }> 
        </div>
    )

    console.log('this', this)
    return(
      <div>
        <h3> Make a Div </h3>
        <DivForm
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
          height={this.state.height}
          width={this.state.width}
          background={this.state.background}
        >
        </DivForm>

        <br/>
        {NewDivs}
      </div>
    )
  }
}


export default DivList;