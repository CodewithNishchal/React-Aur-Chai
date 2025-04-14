import { useState } from 'react'

function App() {
  
  let [number, changeNumber] = useState(15);


  return (
    <>
      <h1>Current Value = { number }</h1>
      <button onClick={() => {
        changeNumber(number + 1)
      }}>Increase Value</button>
      <br />
      <button onClick={() => {
        if (number == 0)
          return;
        changeNumber(--number)
      }}>Decrease Value</button>
    </>
  )
}

export default App
