import React from 'react'
import { Link } from 'react-router-dom'

function PropertyItem({name, image, property_type, location}){
    return (
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{property_type}</p>
            <p>{location}</p>

            <button>View More</button>
            <Link to={'/booking'}><button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Book</button></Link>
            <Link to={'/upd-prop'}><button className='bg-[#3e52d2] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Update</button></Link>
            <button>Delete</button>
            
        </div>
    )
}

export default PropertyItem