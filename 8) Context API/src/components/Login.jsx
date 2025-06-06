import React, {useState, useContext} from 'react'
import userContext from '../Context/UserContext'

function Login() {
    
    const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
    <div>
        <h2>Login</h2>
        <input type="text"
            value={username}
            onChange={(e) => {
            return setUsername(e.target.value)
            }}
                placeholder='Username'
            />
            
        <input type="password"
            value={password}
            onChange={(e) => {
            return setPassword(e.target.value)
            }}
                placeholder='Password'
            />          
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login
