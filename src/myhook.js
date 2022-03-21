import {useState} from "react";
export default function useHook(){
  const[ a , seta] = useState(0);
  const inc = () =>{
    return seta(a+2);
  
  }
  const dec =() =>{
    return seta(a-2);
  }
  const reset = () =>{
    return seta(0)
  }
  return [a, inc,dec,reset]
  // <button >hey </button>;
  // <button> hello dec</button>
  
}