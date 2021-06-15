import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom'


export default function Signup() {

const emailRef = useRef<HTMLInputElement | null>(null)
const passwordRef = useRef<HTMLInputElement | null>(null)
const confirmPasswordRef = useRef<HTMLInputElement | null>(null)
const {signup} = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const history = useHistory();

async function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault();


    if(passwordRef.current && confirmPasswordRef.current && emailRef.current){
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
        console.log("password no matchy");
        return setError('Passwords do not match');
    }

    console.log('hello');
    try{
    setError('');
    setLoading(true);
    await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
    } catch {
        setError('Failed to create account');
    }

    setLoading(false);}
}

    return (
        <>
        <div>
            Sign up
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
            <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input type="confirmPassword" ref={confirmPasswordRef} id="confirmPassword" name="confirmPassword"></input>
            </div>
        <button disabled={loading} type="submit">Sign up</button>
        </form>
          <div>
            Already have an account? <Link to="/login">Log in</Link>
        </div>  
        </>
    )
}
