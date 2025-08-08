import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  return <>
    <h1>Counter {count}</h1>
    <button onClick={()=>setCount((c)=> c+1)}>Click me</button>
  </>
}

export default App;