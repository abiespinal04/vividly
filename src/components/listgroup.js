import React from 'react';



const ListGroup = (props) => {
 const { items,onItemSelect,selectedGenre,textProperty,valueProperty} = props;
    
        return (  
          
        <ul style={{margin:10}}className="list-group">

        {items.map(item => <li onClick={() =>onItemSelect(item)}key={item[valueProperty]} class={item===selectedGenre? "list-group-item active" : "list-group-item" }>{item[textProperty]}</li>)}
  
  
        </ul>

         );
         
    };
    ListGroup.defaultProps = {
        textProperty : "name",
        valueProperty : "_id"
    };
  
export default ListGroup;