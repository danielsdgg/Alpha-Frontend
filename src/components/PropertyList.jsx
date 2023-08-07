import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = ({property, image}) => {
  property.map(proper => {
    console.log(proper.id)
  })

  // image.map(picha => {
  //   console.log(picha.image1)
    
  // })
  return (
    <div>
        {property.map(properties => <PropertyItem key = {property.id} id = {property.id} name = {properties.name} property_type={properties.property_type} location={properties.location}/>)}
        {
          image.map(picha => {
            console.log(picha.image1)
            // <PropertyItem image = {picha.image1}/>
            
          })
        }
    </div>
  )
}

export default PropertyList