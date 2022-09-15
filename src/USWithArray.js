import React from 'react';
import { useState } from 'react';

export default function USWithArray() {
    let num = [11,22,33,44];
    const [numbers, setNumbers] = useState(num);
    // let changeList= ()=>{
    //     setNumbers([55,66,77,88]);
    // }
    // if we want to add new numbers in existing array
    let changeList= ()=>{
        setNumbers(previousState =>{
          return [
            ...previousState,
            Math.floor(Math.random()*50)
            // 90
          ]
        }

        );
      }
  return (
    <div>
      <ul>
        {numbers.map((n,i) =><li key={i}>{n}</li>)}
        <button onClick={changeList}>Change Array</button>
      </ul>
    </div>
  )
}
