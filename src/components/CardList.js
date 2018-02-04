import React, { Component } from 'react';
import '../App.css';
import { Card }from './Card';

export const CardList = (props) =>{
    return(
        <div className="list">
           {props.data.map((card) => <Card  {...card} onDelete={props.onDelete}/>)}
       </div> 
    );
}

export default CardList;