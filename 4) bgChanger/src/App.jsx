import { useState } from 'react'

function App() {

  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: bgColor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => {
              setBgColor("red")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "red", color: "white"}}
          >
            Red
          </button>
          <button
            onClick={() => {
              setBgColor("blue")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "blue", color: "white"}}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setBgColor("Green")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "green", color: "white"}}
          >
            Green
          </button>
          <button
            onClick={() => {
              setBgColor("Cyan")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "cyan", color: "white"}}
          >
            Cyan
          </button>
          <button
            onClick={() => {
              setBgColor("purple")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "purple", color: "white"}}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setBgColor("orange")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "orange", color: "white"}}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setBgColor("pink")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "pink", color: "white"}}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setBgColor("yellow")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "yellow", color: "white"}}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setBgColor("goldenrod")
            }}
            className='outline-none px-4 rounded-2xl'
            style={{backgroundColor: "goldenrod", color: "white"}}
          >
            Golden Rod
          </button>
        </div>
      </div>      
    </div>
  )
}

export default App
