import React, {useState} from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = ({property, onSearch}) => {  
  console.log(property)
  const [location, setLocation] = useState('');
  const [Price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter properties based on the search criteria
    // const filteredProperties = properties.filter(property =>
    //   property.location.toLowerCase().includes(location.toLowerCase()) &&
    //   (Price === '' || property.price <= parseFloat(Price)) &&
    //   (propertyType === '' || property.property_type === propertyType)
    // );

    onSearch(location, Price);
  };

  const displayProperties = property.map(properties => {
    var propertyimage = ""
    console.log(properties.images)
    properties.images.map(image => {
      console.log(image.image1)
      propertyimage = image.image1
      return propertyimage
    })

    console.log(propertyimage)

    return <PropertyItem key = {properties.id} id = {properties.id} name = {properties.name} property_type={properties.property_type} location={properties.location} image = {propertyimage}/>
  })

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {displayProperties}
=========

const PropertyList = ({property}) => {  
  console.log(property)
  const displayProperties = property.map(properties => {
    // var propertyimage = ""
    // console.log(properties.images)
    // properties.images.map(image => {
    //   // console.log(image.image1)
    //   propertyimage = image.image1
    // })

         <div className='form-group'>
          <label htmlFor='propertyType'>Property Type:</label>
          <select
            name='propertyType'
            id='propertyType'
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value=''>Any</option>
            <option value='Home'>Home</option>
            <option value='Apartment'>Apartment</option>
            <option value='Land'>Land</option>
          </select>
        </div>  

        <button className='search-btn' type='submit'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </form>
      
      <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {displayProperties}

>>>>>>>>> Temporary merge branch 2
    </div>
    
  )
}

export default PropertyList;