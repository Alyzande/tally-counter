import React, { useState } from "react";

function Counter(props) {
  const [count, changeCount] = useState(0);

  const buttonHandler = () => {
    console.log("button clicked");
    changeCount((prevState) => prevState + 1);
  };

  const resetCounter = () => {
    changeCount(0);
  };

  return (
<div className={props.counterName}>
<h1>{props.counterName}</h1>
<p>{count}</p>
<button onClick={()=> buttonHandler()}>increase count</button>
<button onClick={()=> resetCounter()}>Reset</button>
</div>

  );
}

export default Counter;
