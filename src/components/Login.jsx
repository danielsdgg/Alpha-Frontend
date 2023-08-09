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