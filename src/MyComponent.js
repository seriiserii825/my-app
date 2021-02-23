import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    counter: 0
  }
  counterUp = () => {
    this.setState({counter: this.state.counter + 1})
  }
  counterDown = () => {
    if (this.state.counter === 0) {
      return;
    }
    this.setState({counter: this.state.counter - 1})
  }
  
  render () {
    return (
      <div>
        <button onClick={this.counterUp}>Update counter up</button>
        <h2>My counter: {this.state.counter}</h2>
        <button onClick={this.counterDown}>Update counter down</button>
      </div>
    );
  }
}
export default MyComponent;
