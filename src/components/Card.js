import React, { Component } from 'react';
import '../App.css';

export const Card = (props) =>{
    debugger
    return(
        <div className="card">
            <div>
                <img className="img" src={props.src}/>
                <button className="delete-btn"  onClick={() => props.onDelete(props.id)}>X</button>
            </div>
            <div className="info">
                <div className="name">{props.name}</div>
                <div>{props.companyName}</div>
            </div>
       </div> 
    );
}

export default Card;