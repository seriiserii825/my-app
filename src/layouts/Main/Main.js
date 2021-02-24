import React from 'react';
import styles from './Main.module.css';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import NotFound from "../../NotFound/NotFound";

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
  
  findMovies = (term) => {
    fetch(`http://www.omdbapi.com/?apikey=e2b49d76&s=${term}`)
      .then(res => res.json())
      .then(res => {
        this.setState({movies: res.Search})
      })
  }
  
  render () {
    const {movies} = this.state;
    if (movies) {
      return (
        <main className={styles.main}>
          <Search cb={this.findMovies}/>
          <div className={styles.wrap}>
            {movies.length ? <Movies movies={movies}/> : <h4>Loading...</h4>}
          </div>
        </main>
      );
    } else {
      return (
        <main className={styles.main}>
          <NotFound/>
        </main>
      )
    }
  }
}
export default Main;
