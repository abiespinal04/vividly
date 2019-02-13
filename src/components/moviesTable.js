import React from 'react';
import Liked from './common/like';


const MoviesTable = (props) => {
    const {movies,onLike,onDelete,onSort} = props;
    return ( 
      
            
        <table class="table">
         
        <thead>
          <tr>
         
         
         
            <th onClick={()=>onSort('title')}>Title</th>
            <th onClick={()=>onSort('genre.name')}>Genre</th>
            <th onClick={()=>onSort('stock')}>Stock</th>
            <th onClick={()=>onSort('rate')}>Rate</th>
         
            <th></th>
           
          </tr>
        
        </thead>
      
        <tbody>
       
        {movies.map(movie => (
       
            <tr key={movie._id}>
        
            <th>{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td> <Liked liked={movie.liked} onClick={() =>onLike(movie)}/></td>
            <td><button onClick ={() => onDelete(movie)}className="btn btn-danger btn-sm">Delete</button></td>
          </tr>
              ))}
      </tbody>
  
      </table>
         
     );
}
 
export default MoviesTable;


