import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import About from "./components/About";
import Properties from "./components/Properties";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Details from "./components/Details";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [property, setProperty] = useState("")

  useEffect(() => {
    fetch('')
    .then((r) => r.json())
    .then((data) => setProperty(data))
  })



  return (
    <div className="App">       
    <BrowserRouter>  
    <NavBar/> 
        <Routes>
        <Route exact path="/" element= {<Front/>}/>
        <Route exact path="/login" element= {<Login/>}/>
        <Route exact path="/register" element= {<Register/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contacts" element = {<Contacts/>}/>
        <Route path="/properties" element = {<Properties/>} />
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/details" element = {<Details/>}/>
        </Routes> 
    </BrowserRouter> 
    <Footer/> 
    </div>
  );
}

export default App;
