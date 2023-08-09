import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import About from "./components/About";
import PropertyList from "./components/PropertyList"
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Details from "./components/Details";
import  Login  from "./components/Login";
import  Register  from "./components/Register";
import Booking from "./components/Booking";
import BookingList from "./components/BookingList";
import UpdateProperty from "./components/UpdateProperty";
import FileForm from "./components/FileForm";
import Home from "./components/Home";

function App() {
  const [property, setProperty] = useState([])
  const [image, setImages] = useState([])
  // ddei3mzex

  const uploadProfile = (file) => {
    const data = new FormData()
    data.append('cloudname','ddei3mzex')
    data.append('upload_preset','react-upload')
    data.append('file',file.file)

    fetch(`https://api.cloudinary.com/v1_1/demo/image/upload`,{method:"POST",
    body:data
  })
  .then((r) => r.json())
  .then((data) => {console.log(data)})
  }

  // curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST --data 'file=sample.jpg&timestamp=173719931&api_key=436464676&signature=a781d61f86a6f818af'

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch("http://127.0.0.1:5000/properties")
      const data = await response.json()
      return setProperty(data)

    }
    fetching()
  },[])

  function loginUser(email,pass){
    fetch('http://127.0.0.1:5000/login',{
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Context-Type':'application/json',
        },
        body: JSON.stringify({ email,pass}),
    })
    .then((r) => {
        if (r.ok){
            alert("logged in Successfully")
            return r.json()
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:',error);
        console.log('Response:',error.response);
    });
  }



  return (
    <div className="App">    
    {/* <FileForm uploadProfile={uploadProfile}/>    */}
    <BrowserRouter>  
    <NavBar/> 
        <Routes>
        <Route exact path="/login" element= {<Login/>}/>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/front" element= {<Front/>}/>
        <Route exact path="/register" element= {<Register/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contacts" element = {<Contacts/>}/>
        <Route path="/properties" element = {<PropertyList property= {property} image = {image}/>} />
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/details/:id" element = {<Details/>}/>
        <Route path="/booking" element = {<Booking/>}/>
        <Route path="/BookingList" element = {<BookingList/>} />
        <Route path="/upd-prop" element = {<UpdateProperty/>}/>
        </Routes> 
    </BrowserRouter> 
    {/* <Footer/>  */}
    </div>
  );
}

export default App;
