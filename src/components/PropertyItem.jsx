import React from 'react'

function PropertyItem({name, property_type, location}){
    return (
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{property_type}</p>
            <p>{location}</p>

            <button>View More</button>
            <button>Book</button>
            <button>Update</button>
            <button>Delete</button>
            
        </div>
    )
}

export default PropertyItem