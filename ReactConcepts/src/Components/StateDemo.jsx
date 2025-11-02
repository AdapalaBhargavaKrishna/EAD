import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-10">
      <h1>Basically Count is a State</h1>
      <h1 className="font-bold text-3xl">{count}</h1>
      <div className="flex gap-10">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-neutral-100 border border-neutral-500 p-2 rounded-xl font-semibold"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-neutral-100 border border-neutral-500 p-2 rounded-xl font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
