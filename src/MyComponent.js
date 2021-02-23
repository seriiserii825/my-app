import React, {Component} from 'react';
import Posts from "./Posts/Posts";

class MyComponent extends Component {
  state = {
    posts: [],
    loading: true
  }
  
  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({posts: data})
        this.setState({loading: false});
      })
  }
  
  componentDidUpdate () {
    console.log('component was updated');
  }
  
  render () {
    return (
      <div>
        {this.state.loading ? <h3>Loading</h3> : <Posts data={this.state.posts}/>}
      </div>
    );
  }
}
export default MyComponent;
