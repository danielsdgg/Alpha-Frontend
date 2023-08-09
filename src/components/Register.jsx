import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register(){
    // const nav = useNavigate()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fname)

        fetch('http://127.0.0.1:5000/signup',{
            
            method: "POST",
            headers: {
                'Accept':'application/json',
                'Context-Type':'application/json',
            },
            body: JSON.stringify()
        })
        .then((r) => {
            if (r.ok){
                alert("Sign up Successful. You can now login")
                return r.json()
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:',error);
            console.log('Response:', error.response);
        });
        
    }

    return(
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            <form className="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={handleSubmit}>
            <h1 className="text-center font-extrabold md:text-4xl sm:text-1xl underline text-red-500">SIGN UP FORM</h1><br></br>

                <label htmlFor="fname" className='text-2xl block text-center font-semibold'>First name</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="first-name" value={fname} name="fname" onChange={(e) => setFname(e.target.value)} id="fname" />

                <label htmlFor="lname" className='text-2xl block text-center font-semibold'>Last name</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="last-name" value={lname} name="lname" onChange={(e) => setLname(e.target.value)} id="lname" />

                <label htmlFor="email" className='text-2xl block text-center font-semibold'>Email Address</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="myemail@gmail.com" value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" />

                <label htmlFor="phone" className='text-2xl block text-center font-semibold'>Phone-Number</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="254707319080" value={phone} onChange={(e) => setPhone(e.target.value)} type="integer" id="phone" name="phone"/>

                <label htmlFor="password" className='text-2xl block text-center font-semibold'>Password</label>
                <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} id="password" name="password"/>

                <label htmlFor="image" className='text-2xl block text-center font-semibold'>Image</label>
                <input value={image} onChange={(e) => setImage(e.target.value)} type="file" id="image" name="image"/>

                <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black hover:bg-green-300' type="submit">Register</button><br></br>
                <Link to={'/login'} className='text-blue-100'>Already have an account? Login here</Link>
            </form>
            
        </div>
    )
}
export default Register