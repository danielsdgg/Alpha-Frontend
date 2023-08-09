import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
    const nav = useNavigate()

    // declaring form variables
    const [date, setDate] = useState("")
    const [price] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        // object that hold data
        const newBooking = {
            date:date,
            price:price,
        }
        fetch("", {
            method: "POST",
            headers:{
                "Context-Type":"application/json"
            },
            body: JSON.stringify(newBooking)
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        setInputClear()

        nav.push('/properties')
    }
    function setInputClear(){
        setDate("")
    } 

  return (
    <div>
        <form className='' onSubmit={handleSubmit}>
            <h2 className='text-center font-bold'>Booking</h2>
            <label htmlFor='date'>Checkin-Date</label>
            <input type='date' id='date' value={date} placeholder='Enter your booking date' onChange={e=>setDate(e.target.value)}/>
            <p>The Booking fee of this property is: {price}</p>
            <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Booking
