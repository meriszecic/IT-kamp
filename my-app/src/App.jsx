import "./App.css";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <button
        className="dugme1"
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </button>
      <h1 className="broj">{counter}</h1>
      <button
        className="dugme1"
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default App;
