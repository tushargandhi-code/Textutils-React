import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
{/*import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
  }from "react-router-dom";*/}


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,   // naam same bhi rkh skta ha 
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },900);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#28282B';
      showalert("Dark mode has been enable","success")
      document.title = "Textutils - Dark mode";
    }
    else{
      setmode('light');
       document.body.style.backgroundColor= 'white';
       showalert("Light mode has been enable","success")
       document.title = "Textutils - Light mode";
    }
  };
  return (
    <>
    {/*<Router>*/}
    <Navbar title="Textutils" homeabout="About" action="burger khalo ji" mode={mode} togglemode={togglemode} />
    
    <Alert alert={alert}/>

    <div className="container my-3">
   {/* <Routes>
          <Route exact path = "/about" element = {<About mode={mode} />} />*/}
          {/*<Route exact path = "/" element =*/} {<Textform  heading = "Try Textutils - Word counter : Character counter : Convert Uppercase to Lowercase And Lowercase to Uppercase" mode={mode} showalert = {showalert}/>} />
   {/* </Routes>
   
   </Router>*/}
  
   </div>
    </>
  );
}


export default App;
