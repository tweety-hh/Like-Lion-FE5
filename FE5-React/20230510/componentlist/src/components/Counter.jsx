import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
}
