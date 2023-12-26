import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function afzayesh() {
    setCount(count + 1);
  }
  function kahesh() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={afzayesh}>+</button>
      <button onClick={kahesh}>-</button>
    </div>
  );
}
export default App;
