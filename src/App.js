import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import ReactDOM from "react-dom/client";
import { Link, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Howitswork } from './pages/Howitswork';
import {Studypage} from './pages/Studypage';
import {Testomonial} from './pages/Testomonial'
function App() {
  return (
  <>
 
 
  
 <Routes>
 <Route path="/" element={<Home/>}>
    
 </Route>
 <Route path="/home/" element={<Home/>}>
    
 </Route>
 <Route path="/about/" element={<About/>}>
    
 </Route>
    <Route path="/about/" element={<About/>}>
    
    </Route>
   
    <Route path="/contact/" element={<Contact/>}>
    

    
    </Route>
    <Route path="/dsc/" element={<Studypage/>}>
    
    </Route>
    <Route path="/howwork/" element={<Howitswork/>}>
    
    </Route>
    <Route path="/testo/" element={<Testomonial/>}>
    
    </Route>
  </Routes>

 </>

  );
}

export default App;
