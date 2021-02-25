import React, {useState, useEffect} from 'react';

function Counter (props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log('hello from clicker', count);
    
    return () => {console.log('good buy clicker');}
  }, [count]);
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;
