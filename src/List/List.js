import React, {Component} from 'react';

class List extends Component {
  state = {
    posts: [
      {id: 1, title: 'Js'},
      {id: 2, title: 'Jquery'},
      {id: 3, title: 'React'}
    ]
  }
  
  render () {
    return (
      <>
        <h2>List</h2>
        <ul>
          {this.state.posts.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
export default List;
