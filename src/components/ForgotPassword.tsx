import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {Link} from 'react-router-dom'

export default function ForgotPassword() {

const emailRef = useRef<HTMLInputElement | null>(null)
const {resetPassword} = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('')

async function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault();

    if(emailRef.current){
    try{
    setMessage('');
    setError('');
    setLoading(true);
    await resetPassword(emailRef.current.value)
    setMessage("Check your mail to reset your password")
    } catch {
        setError('Failed to reset password');
    }

    setLoading(false);}
}

    return (
        <>
        <div>
            Password reset
        </div>
        {message && <h1>{message}</h1>}
        {error && <h1>{error}</h1>}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Enter your email:</label>
            <input type="email" ref={emailRef} id="email" name="email"></input>
            </div>
            
        <button disabled={loading} type="submit">Reset password</button>
        </form>
        <div>
            <Link to="/login">Login</Link>
        </div>
          <div>
            Need an account? <Link to="/signup">Sign up</Link>
        </div>  
        
        </>
    )
}
