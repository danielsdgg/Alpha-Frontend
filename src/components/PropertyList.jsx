import React from 'react';
import PropertyItem from './PropertyItem';


const PropertyList = ({property}) => {  
  console.log(property)

  const displayProperties = property.map(properties => {
    // var propertyimage = ""
    // console.log(properties.images)
    // properties.images.map(image => {
    //   console.log(image.image1)
    //   propertyimage = image.image1
    // })

    // console.log(propertyimage)

    return <PropertyItem key = {properties.id} id = {properties.id} name = {properties.name} property_type={properties.property_type} location={properties.location}/>
  })

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {displayProperties}
    </div>
  )
}

export default PropertyList;