import React,{useState} from 'react'

const UpdateProperty = () => {
    const [formData, setFormData] = useState({
        name:"",
        property_type:"",
        location:"",
        selling_price:"",
        leasing_price:"",
        description:"",
        leasing:"",
        status:"",
        image:"",
    })
    function handleSubmit(e){
        e.preventDefault()

        const newProperty = {
            name:formData.name,
            property_type:formData.property_type,
            location:formData.location,
            selling_price:formData.selling_price,
            leasing_price:formData.leasing_price,
            description:formData.description,
            leasing:formData.leasing,
            status:formData.status,
            image:formData.image,
        };

    
        fetch('http://127.0.0.1:5000/properties', {
            method: "PATCH",
            headers: {
                "Context-Type":"application/json",
            },
            body: JSON.stringify(newProperty)
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
        })
    }
  return (
    <div>
        <form className='text-center font-bold' onSubmit={handleSubmit}>
            <h2 className='font-bold text-center'>Update Property</h2>
            <label type="text">Name: </label>
                <input type="text" id="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/>

                <label type="text">Property-Type: </label>
                <input type="text" id="property_type" value={formData.property_type} onChange={(e)=>setFormData({...formData,property_type:e.target.value})}/>

                <label type="text">Location: </label>
                <input type="text" id="loca" value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})}/>

                <label type="text">Selling Price: </label>
                <input type="text" id="selling_price" value={formData.selling_price} onChange={(e)=>setFormData({...formData,selling_price:e.target.value})}/>

                <label type="text">Leasing Price: </label>
                <input type="text" id="leasing_price" value={formData.leasing_price} onChange={(e)=>setFormData({...formData,leasing_price:e.target.value})}/>

                <label type="text">Description: </label>
                <input type="text" id="describe" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}/>

                <label type="text">Leasing: </label>
                <input type="text" id="leasing" value={formData.leasing} onChange={(e)=>setFormData({...formData,leasing:e.target.value})}/>

                <label type="text">Status: </label>
                <input type="text" id="status" value={formData.status} onChange={(e)=>setFormData({...formData,status:e.target.value})}/>

                <label type="text">Image: </label>
                <input type="file" id="image" value={formData.image} onChange={(e)=>setFormData({...formData,image:e.target.value})}/>

        </form>

    </div>
  )
}

export default UpdateProperty