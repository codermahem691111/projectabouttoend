import React from 'react'
import  './dsc.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Dc1 from './images/dieases/allergy.jpg'
import Dc2 from './images/dieases/astham.jpg'
import Dc3 from './images/dieases/hypertension.jpg'
import Dc4 from './images/dieases/infertility.jpg'
import Dc5 from './images/dieases/maigraine.jpg'
import Dc6 from './images/dieases/sinusitis.jpg'
import Dc7 from './images/dieases/skin.jpg'
import Dc8 from './images/dieases/spondylitis.jpg'
export const Dsc = () => {


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
    
    <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>Disease</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       
       <img className='text-center' src={Dc1} id='cartoon1' ></img>

       <h2 className='text-2xl mt-5'>Allergy</h2>
       
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <img className='text-center' src={Dc2} id='cartoon1' ></img>

    <h2 className='text-2xl mt-5'>Astham</h2>

  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={Dc3} id='cartoon1' ></img>
 
  <h2 className='text-2xl mt-5'>Hypertension</h2>
 
 
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={Dc4} id='cartoon1' ></img>

       <h2 className='text-2xl mt-5'>infertility</h2>
        
  </div>
  
  
  
  
  
  </div>
    
  <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
  <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
     
     <img className='text-center' src={Dc5} id='cartoon1' ></img>

     <h2 className='text-2xl mt-5'>Maigraine</h2>
     
  </div>
 
  <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={Dc6} id='cartoon1' ></img>

  <h2 className='text-2xl mt-5'>Sinusitis</h2>

</div>

<div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
<img className='text-center' src={Dc7} id='cartoon1' ></img>

<h2 className='text-2xl mt-5'>Skin</h2>


</div>

<div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
<img className='text-center' src={Dc8} id='cartoon1' ></img>

     <h2 className='text-2xl mt-5'>Spondylitis</h2>
      
</div>





</div>
  
    
    </>
  )
}
