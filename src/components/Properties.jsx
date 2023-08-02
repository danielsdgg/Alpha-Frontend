import React from 'react'
import House from '../assets/apartment1.jpeg'
import Home3 from '../assets/home3.jpg'
import Home4 from '../assets/home4.jpeg'
import House2 from '../assets/apartment2.png'

const Properties = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-slate-400'>
        <h2 className='text-4xl font-extrabold text-center p-10'>Alpha Properties</h2>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-90 mx-auto mt-[-3rem] bg-white' src={House} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Eldon Apartments</h2>
                <p className='text-center font-bold'>$150 /month</p>
                <div>
                    <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>View More</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-90 mx-auto mt-[-3rem] bg-white' src={Home3} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Karen Homes</h2>
                <p className='text-center font-bold'>$300,000</p>
                <div>
                    <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>View More</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-90 mx-auto mt-[-3rem] bg-white' src={Home4} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Utawala Chills</h2>
                <p className='text-center font-bold'>$110,000</p>
                <div>
                    <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>View More</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-90 mx-auto mt-[-3rem] bg-white' src={House2} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>West Apartments</h2>
                <p className='text-center font-bold'>$200 /month</p>
                <div>
                    <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto px-4 py-2'>View More</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Properties