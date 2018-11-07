import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {actors.map(actor => {
          return (
            <React.Fragment>
              <div className="actor">{actor.name}
                <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
              </div>
            </React.Fragment>
          )
      })}
    </React.Fragment>
  );
};

export default Actors;
