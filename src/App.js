import './App.css';
import React, {useState} from "react";
import Timer from "./Timer/Timer";

function App () {
  let [isVisible, setIsVisible] = useState(false);
  const toggleIsVisible = () => {
    setIsVisible((prevState => !prevState))
  }
  console.log(isVisible);
  return (
    <div className="App">
      <button onClick={toggleIsVisible}>Toggle counter</button>
      {isVisible ? <Timer/> : null}
    </div>
  );
}

export default App;
