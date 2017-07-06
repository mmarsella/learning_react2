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
      divs: [{'backgroundColor':'red', 'height':'100px', 'width':'100px'}]
    }

    // this.addFocus = this.addFocus.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let divs = this.state.divs;
    let newDiv = {backgroundColor:this.state.background, 
                  height:this.state.height + 'px',
                  width:this.state.width + 'px'}
    divs.push(newDiv);

    this.setState({
      divs:divs,
      height:'',
      width:'',
      background:''
    })

    // Set Focus on the height input
    this.addFocus();
  }

  addFocus() {
    console.log('addFocus!', this)

    // Nested refs. I added a ref to the DivForm elem in the render() below
    // Inside of the DivForm - I added a ref to the height input.  
    // This way, I can access height input through these refs to addFocus
    // after submitting form.
    this.divForm.height.focus();
  }

  handleChange(e){
    // console.log('handling change!', e);
    console.log('NAME:', e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    /* LEFT OFF HERE ********** */
    let NewDivs = this.state.divs.map(function(el,i){
      console.log(el)
      return (
        <div style={el} key={i} className='newDiv'> 
        </div>
      )
    })

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
          ref={ el=> this.divForm= el}
          
        >
        </DivForm>

        <br/>
        {NewDivs}
      </div>
    )
  }
}


export default DivList;