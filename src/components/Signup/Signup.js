import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailOnblur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordOnblur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordOnblur = (event) => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Two password did not match!');
            return;
        }
        if (password.length < 6) {
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnblur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnblur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm-Password</label>
                        <input onBlur={handleConfirmPasswordOnblur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red', margin: '0 0 20px 0' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to='/login' className='form-link'>Login</Link></p>
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

export default Signup;