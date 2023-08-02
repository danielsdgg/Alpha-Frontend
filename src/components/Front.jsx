import React from 'react';
import Typed from 'react-typed';

const Front = () => {
  return (
    <div className='text-white bg-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-[#9dd0dd] font-bold p-2 md:text-7xl sm:text-6xl text-4xl md:py-6'>Buy, Sell, Rent.</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>The best deals for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl text-blue-200 font-bold md:pl-4 pl-2' strings={['Realtors', 'Customers']} typeSpeed={120} backSpeed={140} loop/>
            </div>
        </div>
    </div>
  )
}

export default Front