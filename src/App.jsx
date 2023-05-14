import React from "react";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

const App = () => {
  return (
    <div>
      {/* <CounterApp/> */}
      <CounterWithCustomHook/>
    </div>
  );
};

export default App;
