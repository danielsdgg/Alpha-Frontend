import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    // const nav = useNavigate()

    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    
    // nav.push('/properties')
const data = {"email":email, "password":password}
console.log(data)
    const handleSubmit = () => {
fetch("http://127.0.0.1:5000/login",{
    
method: "POST",
headers: {
  "Content-Type": "application/json", // Set the content type to JSON
},
body: JSON.stringify(data), // Convert data to JSON string and set it as the request body
})
.then((response) => response.json())
.then((data) => {
  // Handle the response data
  console.log("Response:", data);
})
.catch((error) => {
  console.error("Error:", error);
});
}; 


    return(
        <div className="auth-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="jackson" id="username" name="username"/> */}

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="myemail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)}type="password" placeholder="enter your password" id="password" name="password"/>

                <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' type="submit">Log In</button>
            </form>
            <Link to={'/register'}>Don't have an account? Sign up here</Link>            
        </div>
    )
}
export default Login