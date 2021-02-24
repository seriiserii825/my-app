import React, {Component} from 'react';
import styles from './Search.module.css';

class Search extends Component {
  state = {
    search: ''
  }
  updateSearch = (e) => {
    this.setState({search: e.target.value})
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
          />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Find</button>
        </div>
      </div>
    );
  }
}
export default Search;
