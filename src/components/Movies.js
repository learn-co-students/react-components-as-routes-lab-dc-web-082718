import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <React.Fragment>
          <div>
            <ul>Title: {movie.title}</ul>
            <ul>Time: {movie.time}</ul>
            <ul>Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></ul>
          </div>
        </React.Fragment>)
      })}
    </div>
  );
};

export default Movies;
