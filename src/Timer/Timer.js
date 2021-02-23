import React, {Component} from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
  state = {
    timer: 0,
    walk: false
  }
  start = () => {
    if (!this.state.walk) {
      this.timerId = setInterval(() => {
        this.setState({timer: this.state.timer + 1})
        if (!localStorage.getItem('timer')) {
          localStorage.setItem('timer', this.state.timer)
        }
        clearInterval(this.timerId)
        this.setState({walk: true})
      }, 1000)
    } else {
      clearInterval(this.timerId)
      this.setState({walk: false})
    }
  }
  reset = () => {
    this.setState({walk: false, timer: 0})
    clearInterval(this.timerId)
    if (!localStorage.getItem('timer')) {
      localStorage.setItem('timer', this.state.timer)
    }
  }
  
  componentDidMount () {
    if (!localStorage.getItem('timer')) {
      localStorage.setItem('timer', this.state.timer)
    } else {
      const timer = parseInt(localStorage.getItem('timer'));
      this.setState({timer: timer})
    }
  }
  
  render () {
    return (
      <div className={styles.timer}>
        <h3>React timer</h3>
        <p>{this.state.timer}</p>
        <p>
          <button onClick={this.start}>Start</button>
          <button onClick={this.reset}>Reset</button>
        </p>
      </div>
    );
  }
}
export default Timer;
