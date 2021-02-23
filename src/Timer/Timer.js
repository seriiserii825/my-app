import React, {Component} from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
  state = {
    buttonText: 'Start',
    timer: 0,
    walk: false
  }
  start = () => {
    if (!this.state.walk) {
      this.timerId = setInterval(() => {
        this.setState({timer: this.state.timer + 1})
        this.setState({walk: true})
        this.setState({buttonText: 'Stop'})
      }, 1000)
    } else {
      clearInterval(this.timerId)
      this.setState({walk: false})
      this.setState({buttonText: 'Start'})
    }
  }
  reset = () => {
    this.setState({walk: false, timer: 0})
    clearInterval(this.timerId)
  }
  
  componentDidMount () {
    this.setState({buttonText: 'Start'})
    if (!localStorage.getItem('timer')) {
      localStorage.setItem('timer', this.state.timer)
    } else {
      const timer = parseInt(localStorage.getItem('timer'));
      this.setState({timer: timer})
    }
  }
  
  componentDidUpdate () {
    localStorage.setItem('timer', this.state.timer)
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
    localStorage.setItem('timer', this.state.timer)
  }
  
  render () {
    return (
      <div className={styles.timer}>
        <h3>React timer</h3>
        <p>{this.state.timer}</p>
        <p>
          <button onClick={this.start}>{this.state.buttonText}</button>
          <button onClick={this.reset}>Reset</button>
        </p>
      </div>
    );
  }
}
export default Timer;
