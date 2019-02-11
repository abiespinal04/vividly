import React, { Component } from 'react';

//Input: liked: boolean
//Output: onClick

class Like extends Component {
   
    
   
    render() {
      
        let classes =  "fas fa-heart";

        if(!this.props.liked){
            classes = "far fa-heart";
        }

        return ( 
            <i className={classes} style={{cursor:'pointer'}} onClick={this.props.onClick}></i> 
         );
    }
}
 
export default Like;