import React from 'react';
import PropertyItem from './PropertyItem';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bd86588 (updates)
const PropertyList = ({property}) => {  

  const displayProperties = property.map(properties => {
    var propertyimage = ""
    // console.log(properties.images)
    properties.images.map(image => {
      // console.log(image.image1)
      propertyimage = image.image1
    })

    // console.log(propertyimage)

    return <PropertyItem key = {properties.id} id = {properties.id} name = {properties.name} property_type={properties.property_type} location={properties.location} image = {propertyimage}/>
<<<<<<< HEAD
  })

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {displayProperties}
=======
const PropertyList = ({property, image}) => {
  property.map(proper => {
    console.log(proper.id)
=======
>>>>>>> bd86588 (updates)
  })

  return (
<<<<<<< HEAD
    <div>
        {property.map(properties => <PropertyItem key = {property.id} id = {property.id} name = {properties.name} property_type={properties.property_type} location={properties.location}/>)}
        {
          image.map(picha => {
            console.log(picha.image1)
            // <PropertyItem image = {picha.image1}/>
            
          })
        }
>>>>>>> 732bf45 (other-change)
=======
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {displayProperties}
>>>>>>> bd86588 (updates)
    </div>
  )
}

export default PropertyList