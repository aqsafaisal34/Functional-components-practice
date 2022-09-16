import React from 'react';
import { useEffect, useState } from 'react';

function Functioneffect() {
    const [count,setCount] = useState(0)
    // we add square brakets after 1st parameter which is function. square brakets is the second parameter of use effect which shows an empty array and render use effect once otherwise useeffect render after every update
    // useEffect(()=>{
    //     console.log("Hello I am UseEffect =" + count)
    // },[])
    // render after every update when count update but if we update other function it will not render
    useEffect(()=>{
        console.log("Hello I am UseEffect =" + count)
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>UpdateState</button>
    </div>
  )
}

export default Functioneffect
