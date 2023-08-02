import React from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import About from "./components/About";
import Properties from "./components/Properties";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">       
        <NavBar/>
        <Front/>
        <About/>
        <Properties/>
        <Footer/>      
    </div>
  );
}

export default App;
