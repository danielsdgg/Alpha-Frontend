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
        <div className="auth-form">
            <h1 className="text-center font-extrabold md:text-2xl sm:text-1xl">SIGN UP</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fname">First name</label>
                <input value={fname} name="fname" onChange={(e) => setFname(e.target.value)} id="fname" placeholder="Enter first name"/>

                <label htmlFor="lname">Last name</label>
                <input value={lname} name="lname" onChange={(e) => setLname(e.target.value)} id="lname" placeholder="Enter last name"/>

                <label htmlFor="email">Email Address</label>
                <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="myemail@gmail.com"/>

                <label htmlFor="phone">Phone-Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="integer" id="phone" placeholder="+254707319080" name="phone"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} id="password" placeholder="Enter password" name="password"/>

                <label htmlFor="image">Image</label>
                <input value={image} onChange={(e) => setImage(e.target.value)} type="file" id="image" placeholder="yourimage" name="image"/>

                <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black hover:bg-green-300' type="submit">Register</button>
            </form>
            <Link to={'/login'}>Already have an account? Login here</Link>
        </div>
    )
}
export default Register