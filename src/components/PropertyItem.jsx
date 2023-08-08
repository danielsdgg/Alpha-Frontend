import React from 'react'
import { Link } from 'react-router-dom'

function PropertyItem({id, name, image, property_type, location}){
    console.log(image)
    return (
        <div className='flex justify-center flex-wrap'>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{property_type}</p>
            <p>{location}</p>

            <Link to={`/details/${id}`}><button className='bg-[#ce562a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>View More</button></Link><br></br>
            <Link to={'/booking'}><button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Book</button></Link>            
        </div>
    )
}

export default PropertyItem