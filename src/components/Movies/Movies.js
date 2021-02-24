import React from 'react';
import Movie from "../Movie/Movie";
import styles from './Movies.module.css';

function Movies ({movies}) {
  return (
    <div className={styles.movies}>{movies.map(item => {
      if (item.Poster !== 'N/A') {
        return (
          <div className={styles.item} key={item.imdbID}>
            <Movie title={item.Title} year={item.Year} image={item.Poster}/>
          </div>
        )
      } else {
        return null;
      }
    })}</div>
  );
}

export default Movies;
