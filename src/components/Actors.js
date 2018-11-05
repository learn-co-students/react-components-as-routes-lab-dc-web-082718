import React from 'react';
import { actors } from '../data';

const style = {
  "margin-top": "2em",
  "margin-left": "2em"
}

const Actors = () => {
  return (
    <div style={style}>
      <h1>Actors Page</h1>
      {actors.map(function(actor) {
        return (
          <div>{actor.name}
            {actor.movies.map(movie => <ul>{movie}</ul>)}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
