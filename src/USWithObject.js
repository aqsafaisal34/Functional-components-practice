import React from 'react';
import  { useState } from 'react';

// Hooks Usestate with object
export default function USWithObject() {
    const obj ={
        name : "Aqsa",
        age : 22,
        height : 5.5,
        isYoung:true
     }
    const [person, setPerson] = useState(obj);
    let changeState =()=>{
        setPerson({
            name : "laiba",
            age : 21,
            height : 5.6,
            isYoung:true
        })
    }
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}
