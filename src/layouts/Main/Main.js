import React from 'react';
import styles from './Main.module.css';
import Movies from "../../components/Movies/Movies";

class Main extends React.Component {
  state = {
    movies: []
  }
  
  componentDidMount () {
    fetch('http://www.omdbapi.com/?apikey=e2b49d76&s=chip')
      .then(res => res.json())
      .then(res => {
        this.setState({movies: res.Search})
      })
  }
  
  render () {
    const {movies} = this.state;
    return (
      <main className={styles.main}>
        {movies.length ? <Movies movies={movies}/> : <h4>Loading...</h4>}
      </main>
    );
  }
}
export default Main;
