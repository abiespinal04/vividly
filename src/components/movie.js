import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import Liked from './common/like';

class Movie extends Component {
    
    state = {  
      movies : getMovies(),
      currentPage: 1,
      pageSize : 4,
      liked: false
    }

    handleDelete = (movie) =>{
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({
        movies : movies
      })
    }
    
    handlePageChange = (page) => {
      this.setState({currentPage:page})
    }

    handleLike = (liked)=>{

      console.log("Like was clicked");
     
    }
    render() { 
      const{length:count} = this.state.movies;
      const{pageSize,currentPage, movies:allMovies} = this.state;
      if(count === 0 ) return "There are no more movies in the database"
       
      const movies = paginate(allMovies,currentPage,pageSize,)

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
                <th></th>
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
                <td> <Liked liked={movie.liked} onClick={() =>this.handleLike(movie.Liked)}/></td>
                <td><button onClick ={() => this.handleDelete(movie)}className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
                  ))}
          </tbody>
          <Pagination 
          itemCounts={count} 
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          />
          </table>
          </React.Fragment>
         );
    }
}
 
export default Movie;