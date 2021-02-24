import React from 'react';

function Movie ({title, year, image}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="card"/>
      <div className="card-body">
        <p className="card-text">{title}</p>
        <b>{year}</b>
      </div>
    </div>
  );
}

export default Movie;
