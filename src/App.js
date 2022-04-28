import React, { useState } from "react";

import Counter from "./Components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    return setCount(count + 1);
  };

  const reset =()=>{
    setCount(0)
  }

  const Decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("0 limit reached");
    }
  };

  return (
    <>
      <Counter increase={Increase} Reset ={reset} decrease ={Decrease} count ={count} />
    </>
  );
};

export default App;