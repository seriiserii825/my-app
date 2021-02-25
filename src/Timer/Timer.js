import React, {useState, useEffect, useRef} from 'react';
import styles from './Timer.module.css';

function setDefaultValue () {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

function Timer () {
  let [timer, setTimer] = useState(0);
  let [walk, setWalk] = useState(false);
  const timerIdRef = useRef(0);
  const start = () => {
    setWalk(true);
  }
  const reset = () => {
    setWalk(false);
    setTimer(0);
  }
  const stop = () => {
    clearInterval(timerIdRef.current);
    setWalk(false);
  }
  useEffect(() => {
    if (walk) {
      timerIdRef.current = setInterval(() => {
        setTimer((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    }
  }, [walk]);
  useEffect(() => {
    localStorage.setItem('count', timer + '');
  }, [timer]);
  return (
    <div className={styles.timer}>
      <h3>React timer</h3>
      <p>{timer}</p>
      <p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}

export default Timer;
