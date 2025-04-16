import { use, useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [wantNumbers, setNumbers] = useState(false);
  const [wantCharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(wantNumbers) str += "0123456789"
    if (wantCharacter) str += "!@#$%^*&()_?>"
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length )
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, 
    [length, wantNumbers, wantCharacter, setPassword]
  )

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.setSelectionRange(0,10) //*********Very good */
    passwordRef.current?.select() //*********Very good */
    window.navigator.clipboard.writeText(password);

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, wantCharacter, wantNumbers, passwordGenerator])

  return (
    <div className='w-full max-w-lg text-center bg-gray-800 shadow-md rounded-lg  ml-111 my-4 py-8 text-orange-500'>
      <h1 className='text-white text-4xl text-center mb-5'>Password Generator</h1>
      <div
      className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input
          type="text"
          value={password}
          style={{backgroundColor: "white"}}
          className='outline-none text-2xl rounded-lg w-full mx-2 py-4 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'
        >
          Copy
        </button>
      </div>
        
      <div
      className='flex text-sm gap-x-2' 
      > 
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)  
            }}
            value={length}
          />
          <label>Length: {length}</label>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={wantNumbers}
              id='numberInput'
              onChange={() => {
              setNumbers(prev => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={wantCharacter}
              id='characterInput'
              onChange={() => {
              setCharacter(prev => !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
