import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function NewProperty({addProperty}) {
    //const {name, property_type, location, selling_price, leasing_price, description, leasing, status} = property
    const navigate = useNavigate()
    // declaring the variables
    const [name, setName] = useState("")
    const [property_type, setPropertyType] = useState("")
    const [location, setLocation] = useState("")
    const [selling_price, setSellingPrice] = useState("")
    const [leasing_price, setLeasingPrice] = useState("")
    const [description, setDescription] = useState("")
    const [leasing, setLeasing] = useState("")
    const [status, setStatus] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        // creating an object to hold data
        const newProperty = {
            name:name,
            property_type:property_type,
            location:location,
            selling_price:selling_price,
            leasing_price:leasing_price,
            description:description,
            leasing:leasing,
            status:status
        }
        // fetch request to add property to the server
        fetch("http://127.0.0.1:5000/properties",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newProperty)
        })
        .then((r) => r.json())
        .then((data) => addProperty(data))
        // clearing our input fields after adding data
        setInputClear()
        // navigate to properties page after adding a property
        navigate.push('/properties')
    }
    function setInputClear(){
        setName("")
        setPropertyType("")
        setLocation("")
        setSellingPrice("")
        setLeasingPrice("")
        setDescription("")
        setLeasing("")
        setStatus("")
    }

    const [image, setImage] = useState("")

    const submitImage = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","react-upload")
        data.append("cloud_name","ddei3mzex")

        fetch("https://api.cloudinary.com/v1_1/ddei3mzex/image/upload",{
            method:"POST",
            body:data
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }



    // Our form
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1 className='text-center font-bold md:text-2xl sm:text-1xl text-lg '>Add Property</h1>

            <label for="name">Name of Property</label>
            <input type="text" value = {name} placeholder="property-name" onChange={e => setName(e.target.value)}/>

            <label for="property_type">Property-Type</label>
            <input type="text" value = {property_type} placeholder="type of property" onChange={e => setPropertyType(e.target.value)}/>

            <label for="location">Location</label>
            <input type="text" value = {location} placeholder="location of the property" onChange={e => setLocation(e.target.value)}/>

            <label for="description">Description</label>
            <input type="text" value = {description} placeholder="description of the property" onChange={e => setDescription(e.target.value)}/>

            <label for="selling_price">Selling-Price</label>
            <input type="text" value = {selling_price} placeholder="$23000" onChange={e => setSellingPrice(e.target.value)}/>

            <label for="leasing_price">Leasing-Price</label>
            <input type="text" value = {leasing_price} placeholder="$100 /month" onChange={e => setLeasingPrice(e.target.value)}/>

            <label for="leasing">Leasing</label>
            <input type="boolean" value = {leasing} onChange={e => setLeasing(e.target.value)}/>

            <label for="status">Status</label>
            <input type="boolean" value = {status} onChange={e => setStatus(e.target.value)}/>

            <label for="image">Property-Image</label>
            <input type='file' onChange={(e) => setImage(e.target.files[0])}/>

            <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black' onClick={submitImage} type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default NewProperty