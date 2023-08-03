import React,{useState} from 'react';
import { images } from './CarouselData';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Details = () => {
    const [currImg, setCurrImg] = useState(0);


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
        <p className='bg-red p-20 border-r-emerald-200 text-black'>{images[currImg].subtitle}</p>
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
    <p className='font-semibold text-right'>This apartment is located at Ngong Rd: near the junction mall</p>

    </div>
  )
}

export default Details