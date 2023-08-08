import React from 'react'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { FaFortAwesome } from 'react-icons/fa'

const Contacts = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h3 className='text-center font-extrabold'>We would love to hear from you</h3>
        <div className='grid md:grid-cols-2'>
          <img src='https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
          <form>
            <div className=' grid grid-cols-2'>
              <input className=' border m-2 p-2' type='text' placeholder='first name'/>
              <input className=' border m-2 p-2' type='text' placeholder='last name'/>
              <input className=' border m-2 p-2' type='email' placeholder='Email'/>
              <input className=' border m-2 p-2' type='tel' placeholder='phone number'/>
              <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10'></textarea>
              <button className='col-span-2 m-2'>submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contacts