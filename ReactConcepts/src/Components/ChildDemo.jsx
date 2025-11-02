import React from "react";

const ChildDemo = ({ data }) => {
  return (
    <div className="border rounded-xl border-neutral-200 h-50 w-1/2 text-center p-2">
      <h1 className="font-bold mb-2">Hey this is Child Component</h1>
      <p className="text-neutral-400">
        text entered in parent component will be displayed below
      </p>
      <p>{data}</p>
    </div>
  );
};

export default ChildDemo;
