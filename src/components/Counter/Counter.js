import React, {useState, useEffect, useRef} from 'react';

function Counter (props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  const input = useRef(null);
  console.log(input);
  useEffect(() => {
    console.log('hello from clicker', count);
    console.log(input);
    return () => {console.log('good buy clicker');}
  }, [count]);
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      <input type="text" ref={input}/>
    </div>
  );
}

export default Counter;
