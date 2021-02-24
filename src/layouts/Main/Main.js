import React from 'react';
import styles from './Main.module.css';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";

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
        <Search/>
        <div className={styles.wrap}>
          {movies.length ? <Movies movies={movies}/> : <h4>Loading...</h4>}
        </div>
      </main>
    );
  }
}
export default Main;
