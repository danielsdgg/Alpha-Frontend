import React from 'react'
import {
    FaDribbbleSquare,
    FaInstagram,
    FaTwitterSquare,
    FaYoutubeSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#9dd0dd]'>Alpha Homes.</h1>
            <p className='py-2'>Copyrights Alpha Homes and Properties</p>
            <p className='py-2'>All rights reserved @2023</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaInstagram size={30}/>
                <FaDribbbleSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaYoutubeSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h5 className='font-extrabold text-gray-200'>Company</h5><br></br>
                <ul>
                    <li className='py-2 text-sm'>About us</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Contact us</li>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Testimonials</li>

                </ul>
            </div>
            <div>
                <h5 className='font-extrabold text-gray-200 p-2'>Support</h5><br></br>
                <ul>
                    <li className='py-2 text-sm'>Help Center</li>
                    <li className='py-2 text-sm'>Terms of Service</li>
                    <li className='py-2 text-sm'>Legal</li>
                    <li className='py-2 text-sm'>Privacy policy</li>
                    <li className='py-2 text-sm'>Status</li>

                </ul>
            </div>
            <div>
                <h5 className='font-extrabold text-gray-200 p-2'>Stay up to date</h5><br></br>
                <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Your Email Address'/>
            </div>

        </div>

    </div>
  )
}

export default Footer