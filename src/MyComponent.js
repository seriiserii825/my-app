import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    counter: 0
  }
  updateCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }
  
  render () {
    return (
      <div>
        <h2>My counter: {this.state.counter}</h2>
        <button onClick={this.updateCounter}>Update counter</button>
      </div>
    );
  }
}
export default MyComponent;
