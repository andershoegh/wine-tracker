import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function MyWines() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth();
    const history = useHistory();
    
    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            history.push('/login')
        }catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <div>
                <div>
                Profile
                </div>
                {error && <p>{error}</p>}
                <strong>Email:</strong>{currentUser.email}
                <Link to="/updateProfile">Update profile</Link>
            </div>
            <div>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </>
    )
}
