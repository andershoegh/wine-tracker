import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom'

export default function Login() {

const emailRef = useRef<HTMLInputElement | null>(null)
const passwordRef = useRef<HTMLInputElement | null>(null)
const {login} = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const history = useHistory()

async function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(passwordRef.current && emailRef.current){
    try{
    setError('');
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value)
        history.push('/')
    } catch {
        setError('Failed to sign in');
    }

    setLoading(false);}
}

    return (
        <>
        <div>
            Log In
        </div>
        {error && <h1>{error}</h1>}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Enter your email:</label>
            <input type="email" ref={emailRef} id="email" name="email"></input>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" ref={passwordRef} id="password" name="password"></input>
            </div>
        <button disabled={loading} type="submit">Log In</button>
        </form>
        <div>
            <Link to="/forgotPassword">Forgot password?</Link>
        </div>
          <div>
            Need an account? <Link to="/signup">Sign up</Link>
        </div>  
        
        </>
    )
}
