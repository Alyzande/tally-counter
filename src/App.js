import './App.css';
import React, {useState} from "react";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters((prev) => 
      [...prev,{id: counters.length, count:0}]
    )
  };

  const removeCounter = () => {
    setCounters((prev) => prev.slice(0, prev.length -1))
  }
  
  const buildCounters = ()=> {
    return counters.map((counter) => 
      <Counter 
       counterName={`Counter ${counter.id}`} 
       count={counter.count} 
       key={counter.id}
      /> 
    )
  }


  return (
    <div className="appContainer">
      {buildCounters()}
      <br></br>
      <button onClick={() => addCounter()}>Add Counter</button>
      <button onClick={() => removeCounter()}>Remove Counter</button>
      <button>Reset All</button>
    </div>
  );
}

export default App;
