import React, {Component} from 'react';
import styles from './Search.module.css';

class Search extends Component {
  state = {
    search: ''
  }
  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }
  findMovie = () => {
    this.props.cb(this.state.search);
    this.setState({search: ''})
  }
  onKeyPressHandler = (e) => {
    if (e.code === 'Enter') {
      this.props.cb(this.state.search);
      this.setState({search: ''})
    }
  }
  
  render () {
    return (
      <div className={styles.search}>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            onChange={this.updateSearch}
            value={this.state.search}
            onKeyUp={this.onKeyPressHandler}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.findMovie}
          >Find
          </button>
        </div>
      </div>
    );
  }
}
export default Search;
