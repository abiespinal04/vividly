import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import  {getGenres} from '../services/fakeGenreService'
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './listgroup';

class Movie extends Component {
    
    state = {  
      movies : [],
      genres : [],
      selectedGenre : null,
      currentPage: 1,
      pageSize : 4
    }

    componentDidMount(){

      const genres = [{_id: '',name:"All Genres"}, ...getGenres()]

      this.setState({movies: getMovies(), genres:genres })
    }
    handleDelete = (movie) =>{
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({
        movies : movies
      })
    }
    
    handleSort = (path)=>{
      console.log(path)
    }

    handlePageChange = (page) => {
      this.setState({currentPage:page})
    }

    //this method switches the heart icon from solid to plain
    // handleLike = (movie)=>{
    //   movie.liked= !movie.liked;
    //   this.setState({liked:movie.liked})
    //   console.log(movie)
    // }

    //This function handles the like's component state
    handleLike = (movie) => {
      const movies = [...this.state.movies]; //clones the movie array to a new array
      const index = movies.indexOf(movie); // finds the index where 
      movies[index].liked = !movie.liked; // movies.liked will have the opposite of the current boolean
      this.setState({movies:movies})//Resets the movies array with the new property
    }

    handleGenreSelect = (genre) =>{
      
      this.setState({selectedGenre:genre, currentPage:1});
    }
    render() { 
      const{length:count} = this.state.movies;
      const{pageSize,currentPage, movies:allMovies,selectedGenre} = this.state;
      if(count === 0 ) return "There are no more movies in the database"
      //filters movies according to genres if no genre is selected, it filters every movie
      const filtered = selectedGenre && selectedGenre._id? allMovies.filter(movies => movies.genre._id === selectedGenre._id) : allMovies;
      const movies = paginate(filtered,currentPage,pageSize,)

      return ( 
          
        
        <div className="row" >

          <div  className="col-3">

          <ListGroup 
          items={this.state.genres} 
          selectedGenre={selectedGenre}
          onItemSelect={this.handleGenreSelect}
        
          />                      
          </div>
          <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable 
          movies={movies} 
          onLike={this.handleLike} 
          onDelete={this.onDelete}
          onSort={this.handleSort}
          />
          <Pagination 
          itemCounts={filtered.length} 
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          />
          </div>
          </div>
             
          
        
         );
    }
}
 
export default Movie;