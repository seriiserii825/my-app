import './App.css';
import React from "react";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    posts: [
      {id: 1, title: 'Js'},
      {id: 2, title: 'Jquery'},
      {id: 3, title: 'React'}
    ]
  }
  removeItem = (id) => {
    const postIndex = this.state.posts.findIndex(item => item.id === id);
    const before = this.state.posts.slice(0, postIndex);
    const after = this.state.posts.slice(postIndex + 1)
    this.setState({posts: [...before, ...after]});
  }
  
  render () {
    return (
      <div className="App">
        <Posts cb={this.removeItem} posts={this.state.posts}/>
      </div>
    );
  }
}
export default App;
