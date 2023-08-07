import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Front = () => {
  return (
    <div className='text-white bg-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-black font-bold p-2 md:text-7xl sm:text-6xl text-4xl md:py-6'>Buy, Sell, Rent.</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-black'>The best deals for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl text-black font-bold md:pl-4 pl-2' strings={['Realtors', 'Customers']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <Link to={'/register'}><button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Get Started</button></Link>
        </div>
    </div>

  )
}

export default Front