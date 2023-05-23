import React, { useState, useEffect } from "react";
import "./Counter.css"


function Counter({ start, end, text}) {
  const [count, setCount] = useState(start);

  const Loader = useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      if(count=== end){
        setCount(end);
      }
    }, 0.2);
    return () => clearInterval(interval);
  }, [count]);

  return <div onLoad={Loader}>
  <h3 style={{marginBottom: "14px", marginTop:"5px", fontWeight: "500"}}>{count}</h3>
  <span style={{fontSize: "15px", color: "white", fontWeight: "500"}}>{text}</span>
</div>;
}


export default Counter;

