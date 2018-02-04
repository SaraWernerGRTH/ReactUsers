import React, { Component } from 'react';
import '../App.css';
import { CardList }from './CardList';
import { ImageUpload }from './ImgPicker';

export class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={src:''}
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.userNameInput.value,this.companyNameInput.value,this.state.src);
    }
    handleSave=(src)=>{
        debugger        
        this.setState({src:src});
    }
  render() {
    return (
      <form className="Form">
       <ImageUpload onSave={this.handleSave}/>
        <input type="text" className="input" placeholder="user name here!" ref={(input)=>this.userNameInput = input} required/>
        <input type="text" className="input" placeholder="company name here!" ref={(input2)=>this.companyNameInput = input2} required/>
        <button type="submit" onClick={this.handleSubmit}>Add Card</button>
      </form>
    );
  }
}

export default Form;