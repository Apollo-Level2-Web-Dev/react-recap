import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementByValue = (value) => {
    setCount(count + value);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleIncrementByValue(5)}>
        Increment by value
      </button>
      {count}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
