import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { CardList }from '../CardList';
import { Form }from '../Form';

export class Home extends Component {
    addUser=(newUserName,newCompanyName,src)=>{
        let newUser = {
           "src":src,"name":newUserName,"companyName":newCompanyName
        };
        if(newUser.src==''||newUser.src==null||newUser.src==undefined){
          newUser.src="https://avatars0.githubusercontent.com/u/1?v=4";
        }
        if(newUser.name==''){
          newUser.name="New User";
        }
        if(newUser.companyName==''){
          newUser.companyName="New Company Name";
        }
        newUser.id=Math.max.apply(Math,this.props.data.map(function(o){return o.id}))+1; 
        debugger;
        this.props.onAdd(newUser);
      }
    constructor(props, context) {
        super(props, context);
        this.addUser=this.addUser.bind(this);
    }
    render() {
        return (
            <div>
                <div className='home' >
                    <div className="App">
                        <Form onSubmit={this.addUser}/>
                        <CardList data={this.props.data} onDelete={this.props.onDelete}/>
                    </div> 
                </div>
            </div>
        );
    }
}