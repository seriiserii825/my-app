import './App.css';
import React, {useState} from "react";
import Counter from "./components/Counter/Counter";

function App () {
  const [isClicker, setClicker] = useState(false);
  const toggleClicker = () => {
    setClicker(!isClicker);
  }
  return (
    <div className="App">
      <button onClick={toggleClicker}>Toggle clicker</button>
      {isClicker ? <Counter/> : null}
    </div>
  );
}

export default App;
