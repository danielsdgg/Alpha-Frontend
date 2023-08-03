import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = ({property}) => {
  return (
    <div>
        {property.map(properties => <PropertyItem key = {property.id} image = {properties.image} name = {properties.name} property_type={properties.property_type} location={properties.location}/>)}
    </div>
  )
}

export default PropertyList