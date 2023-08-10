import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
    const nav = useNavigate()
    const [phone, setPhone] = useState(0)

    function handlePayment(e){
        e.preventDefault()
        console.log(phone)
        fetch("http://127.0.0.1:5000/payments", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                phone:phone,
                amount:2000
            })
        })
    }


  return (
    <div>
       <form className ="w-full max-w-sm payment_form" onSubmit={handlePayment}>
        <h1>Enter phone number to confirm payment</h1>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="254712345678" aria-label="Full name" value={phone} onChange={e => setPhone(e.target.value)}/>
            <button className="flex-shrink-0 bg- hover:bg- border- hover:border- text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Pay
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="clear">
              Cancel
            </button>
          </div>
      </form>

    </div>
  )
}

export default Booking