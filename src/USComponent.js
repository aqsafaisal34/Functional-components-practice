// Destructuring Method(correct)
import React from 'react'
import { useState } from 'react'
// Hook Usestate with string

export default function USComponent() {
    const [name,setName] = useState("Ali")
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=> setName("Laiba")}>Update</button>
    </div>
  )
}






// update by creating function
// import React from 'react'
// import { useState } from 'react'

// export default function USComponent() {
//     const myArray = useState("Aqsa")
//     let changeState = () =>{
//         myArray[1]("Laiba")
//     }
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   )
// }


// store and update with Array
// import React from 'react'
// import { useState } from 'react'

// export default function USComponent() {
//     const myArray = useState("Aqsa")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={()=> myArray[1]("Laiba")}>Update</button>
//     </div>
//   )
// }
