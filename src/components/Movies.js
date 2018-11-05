import React from 'react';
import { movies } from '../data';

const style = {
  "margin-top": "2em",
  "margin-left": "2em"
}

const Movies = () => {
  return (
    <div style={style}>
      <h1>Movies Page</h1>
        {movies.map(function(movie) {
          return (
            <div>{movie.title} - {movie.time} minutes
              {movie.genres.map(genre => <ul>{genre}</ul>)}
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
