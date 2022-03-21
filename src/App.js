import "./styles.css";
import React, { useState } from "react";
import useHook from "./myhook";

export default function App() {
  const [a, inc, dec, reset] = useHook(0);
  console.log(window.innerWidth);
  // const[c, setc]= useState(0);
  // const inc =() =>{
  //   return setc(c+1);

  // }
  // const dec = () =>{
  //   return setc(c-1);

  // }
  return (
    <div className="App">
      <h2>{a}</h2>
      <button onClick={inc}> click1 </button> &nbsp;
      <button onClick={dec}>click2 </button> &nbsp;
      <button onClick={reset}>reset</button>
    </div>
  );
}
