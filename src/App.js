import './App.css';
import React from "react";
import {Context} from "./hooks/Context";
import Books from "./components/Books";

function App () {
  return <Context> <Books/> </Context>;
}

export default App;
