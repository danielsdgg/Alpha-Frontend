import React,{useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { images } from './CarouselData';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Details = () => {
    const [currImg, setCurrImg] = useState(0);
    const [property, setProperty] = useState("")
    const navigate = useNavigate()
    const {name, property_type, location, selling_price, leasing_price, description, leasing, status} = property
    const { id } = useParams()
    // console.log(id)
    // deleting a property
    function handleDelete(){
      fetch(`http://127.0.0.1:5000/properties/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
      })
      .then((response) => {
        if (response.status === 200){
          navigate('/')
          response.json()
        }
      })
      .then((data) => setProperty(data))

    }

    useEffect(() => {
      const fetching = async () => {
        const response = await fetch(`http://127.0.0.1:5000/properties/${id}`)
        const data = await response.json()
        return setProperty(data)
      }
      fetching()
  }, [id])

  return (
    <div className='w-[60%] h-[700px] bg-slate-400'>
    <div
      className="h-full w-full bg-center bg-no-repeat bg-cover flex"
      style={{ backgroundImage: `url(${images[currImg].img})` }}
    >
      <div
        className="flex-[5%] h-full bg-black grid place-items-center text-white"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1);
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: 30 }} />
      </div>
      <div className='flex-[80%] h-full grid place-items-center text-justify-center'>
        <h1 className='bg-red p-20 border-r-emerald-200 text-black'>{images[currImg].title}</h1>
        {/* <p className='bg-red p-20 border-r-emerald-200 text-black'>{images[currImg].subtitle}</p> */}
      </div>
      <div
        className="flex-[5%] h-full bg-black grid place-items-center text-white"
        onClick={() => {
          currImg < images.length - 1 && setCurrImg(currImg + 1);
        }}
      >
        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
      </div>
    </div><br></br>

    <div className='font-semibold md: text-left'>
      <p>{name}</p>
      <p>{property_type}</p>
      <p>This Property is located at {location}</p>
      <p>{description}</p>
      <p>If you wish to buy this property, it's selling price is marked at ${selling_price}</p>
      <p>The leasing price is ${leasing_price} /month</p>
      <p>{leasing}</p>
      <p>{status}</p>

    <div className='font-semibold md: text-left'>
      <p>{name}</p>
      <p>{property_type}</p>
      <p>This Property is located at {location}</p>
      <p>{description}</p>
      <p>If you wish to buy this property, it's selling price is marked at ${selling_price}</p>
      <p>The leasing price is ${leasing_price} /month</p>
      <p>{leasing}</p>
      <p>{status}</p>

    </div>
    <Link to={'/upd-prop'}><button className='bg-[#dcc22f] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Update Property</button></Link>
    <button className='bg-[#ed3e3e] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={handleDelete}>Delete Property</button>
    </div>
    
  )
}

export default Details