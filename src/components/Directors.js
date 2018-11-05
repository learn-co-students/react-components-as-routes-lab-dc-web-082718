import React from 'react';
import { directors } from '../data';

const style = {
  "margin-top": "2em",
  "margin-left": "2em"
}

const Directors = () => {
  return (
    <div style={style}>
      <h1>Directors Page</h1>
      {directors.map(function(director) {
        return (
          <div>{director.name}
            {director.movies.map(movie => <ul>{movie}</ul>)}
          </div>
        )
      })}
    </div>
  );
}

export default Directors
