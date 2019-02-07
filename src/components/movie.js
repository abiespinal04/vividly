import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './pagination';

class Movie extends Component {
    
    state = {  
      movies : getMovies(),
      pageSize : 4
    }

    handleDelete = (movie) =>{
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({
        movies : movies
      })
    }
    
    handlePageChange = (page) => {
      console.log(page);
    }

    render() { 
      const{length:count} = this.state.movies
      if(count === 0 ) return "There are no more movies in the database"
       
      return ( 
          
        <React.Fragment>
          <p>Showing {count} movies in the database.</p>
          <table class="table">
       
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie => (
                <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick ={() => this.handleDelete(movie)}className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
                  ))}
          </tbody>
          <Pagination 
          itemCounts={count} 
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          />
          </table>
          </React.Fragment>
         );
    }
}
 
export default Movie;