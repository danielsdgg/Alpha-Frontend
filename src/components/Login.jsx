import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    
    // nav.push('/properties')
import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    // const nav = useNavigate()

    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    
    // nav.push('/properties')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => {
            if (!response.ok) {
                history('/front');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setError('Login failed');
            }
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            setError('An error occurred while logging in.');
        });
    };
    

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="jackson" id="username" name="username"/> */}

                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="myemail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="enter your password"
                    id="password"
                    name="password"
                />
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' type="submit">Log In</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <Link to={'/register'}>Don't have an account? Sign up here</Link>
        </div>
    );
};

export default Login;

