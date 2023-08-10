import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const getToken = () => {
        fetch('http://127.0.0.1:5000/token/<token>', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
    })
    .then(res => res.json())
    .then(msg => console.log(msg))

    }
    

    const handleSubmit = (e) => {

        e.preventDefault()
        
    }

    return(
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            
            <form className="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={handleSubmit}>
            <h1 className='text-center font-semibold text-4xl text-red-500 underline'>Login</h1>
            <br></br>
                {/* <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="jackson" id="username" name="username"/> */}

                <label htmlFor="email" className='text-2xl block text-center font-semibold'>Email</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="myemail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}type="text" id="email" name="email"/>

                <label htmlFor="password" className='text-2xl block text-center font-semibold'>Password</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="enter-your-password" value={pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="password"/>

                <button  className='bg-[#00df9a] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-black' type="submit">Log In</button><br></br>
                <Link to={'/register'} className='text-blue-100'>Don't have an account? Sign up here</Link> 
            </form>
                       
        </div>
    )
}
export default Login

        e.preventDefault();
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                // "Authorization":"Basic " + btoa(`${email}:${password}`),
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => {
            if (response.status === 200) {
                // getToken()
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

