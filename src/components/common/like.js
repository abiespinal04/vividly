import React, { Component } from 'react';
import ListGroup from '../listgroup';

//Input: liked: boolean
//Output: onClick

const Like = (props) => {
        let classes =  "fas fa-heart";

        if(!props.liked){
            classes = "far fa-heart";
        }

        return ( 
            <i className={classes} style={{cursor:'pointer'}} onClick={props.onClick}></i> 
         );

}
 
export default Like;


