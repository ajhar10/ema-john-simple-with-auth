import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user, loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailOnblur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordOnblur = (event) => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/shop')
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnblur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnblur} type="password" name="password" id="" required />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-Zon? <Link to='/signup' className='form-link'>Create New Account</Link></p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <div className="google-sign">
                    <p>Continue with Google</p>
                </div>
            </div>

        </div>
    );
};

export default Login;