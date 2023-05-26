import React from 'react'
import './how.css'
import C1 from './images/howitsworks/login.svg'
import C2 from './images/howitsworks/selectdoctor.svg'
import C3 from './images/howitsworks/problem.svg'
import C4 from './images/howitsworks/mail.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
export const How = () => {
  

    useEffect(() => {
        AOS.init();
      }, [])
  return (  
    <>
     
         
           
        <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>How it works</h1>
        <div className="flex flex-row justify-items-center items-center mt-10"  id='rowhw1'>
        <div className="basis-1/5 ml-5" id='cardhwno1' data-aos="zoom-in-up" data-aos-duration="1000">
     
           <img className='text-center' src={C1} id='cartoonhw1' ></img>
           <h1 className='text-center  text-xl'>Registration </h1>
         
        </div>
       
        <div className="basis-1/5 ml-5" id='cardhwno2' data-aos="zoom-in-up" data-aos-duration="1000">
      
        <img className='text-center ' src={C2} id='cartoonhw1' ></img>
        <h1 className='text-center  text-xl'>Select Your Doctor</h1>
       
      </div>
      
      <div className="basis-1/5 ml-5" id='cardhwno1'  data-aos="zoom-in-up" data-aos-duration="1000">
   
      <img className='text-center' src={C3} id='cartoonhw1' ></img>
      <h1 className='text-center  text-xl'>Tell  the problems</h1>

      </div>
      
      <div className="basis-1/5 ml-5" id='cardhwno2'  data-aos="zoom-in-up" data-aos-duration="1000">
     
      <img className='text-center' src={C4} id='cartoonhw1' ></img>
      <h1 className='text-center   text-xl'>Send  you case  form</h1>
     
      </div>
      
      
      
      
      
      </div>
    
    
    </>
  )
}
