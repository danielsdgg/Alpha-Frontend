import React from 'react'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { FaFortAwesome } from 'react-icons/fa'

const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://127.0.0.1:5000/feedback",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name:name, email:email, message:message})
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
  }



  return (
    <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h3 className='text-center font-extrabold'>We would love to hear from you</h3>
        
    </div>
  )
}

export default Contacts