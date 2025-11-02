import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RouterDemo = () => {
  return (
    <div>
      <p className="max-w-4xl text-center font-semibold">
        Router in React js is a client side navigation without page reload for
        example the below links let you go through different routes without
        reloading the page
      </p>
      <ul className="flex gap-10 mt-10 itemss-center justify-center">
        <li className="bg-neutral-200 border border-neutral-500 p-2 rounded-xl">
          {" "}
          <Link to={"/Home"}>Home</Link>
        </li>
        <li className="bg-neutral-200 border border-neutral-500 p-2 rounded-xl">
          {" "}
          <Link to={"/About"}>About</Link>
        </li>
        <li className="bg-neutral-200 border border-neutral-500 p-2 rounded-xl">
          {" "}
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default RouterDemo;
