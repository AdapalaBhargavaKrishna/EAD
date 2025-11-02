import React, { useState } from "react";
import ChildDemo from "./ChildDemo";

const PropsDemo = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1 className="text-green-500 font-bold text-center my-10">
        Demo of props where we send data from a parent component to child
        component
      </h1>
      <div className="flex gap-10">
        <div className="border rounded-xl border-neutral-200 w-1/2 text-center p-2">
          <h1 className="font-bold mb-2">Hey this is Parent Component</h1>
          <input
            className="border rounded-xl border-black"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <ChildDemo data={data} />
      </div>
    </div>
  );
};

export default PropsDemo;
