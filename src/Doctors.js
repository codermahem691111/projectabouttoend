import React from 'react'
import './doctors.css'
import D1 from './images/doctord/aziz.jpg'
import D3 from './images/doctord/dccard1.jpg'
import D2 from './images/doctord/dccard2.jpg'
import D4 from './images/doctord/dccard3.jpg'
import {BsMessenger } from 'react-icons/bs';
import {FaFacebookMessenger} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
export const Doctors = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
     
       
    <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>Our Doctors</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       
       <img className='text-center' src={D1} id='cartoon1' ></img>
       <BsMessenger size='3rem' color='blue' id='msicon'/> 
       <h2 className='text-2xl mt-5'>Sussie  wolf</h2>
        <p>Peditrician</p>
        <button className='text-center grid justify-items-center' id='btn1'>Appointment</button>
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <img className='text-center' src={D1} id='cartoon1' ></img>
    <BsMessenger size='3rem' color='blue' id='msicon'/> 
    <h2 className='text-2xl mt-5'>Sussie  wolf</h2>
     <p>Peditrician</p>
     <button className='text-center grid justify-items-center' id='btn1'>Appointment</button>
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={D1} id='cartoon1' ></img>
  <BsMessenger size='3rem' color='blue' id='msicon'/> 
  <h2 className='text-2xl mt-5'>Sussie  wolf</h2>
   <p>Peditrician</p>
   <button className='text-center grid justify-items-center' id='btn1'>Appointment</button> 
 
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={D1} id='cartoon1' ></img>
       <BsMessenger size='3rem' color='blue' id='msicon'/> 
       <h2 className='text-2xl mt-5'>Sussie  wolf</h2>
        <p>Peditrician</p>
        <button className='text-center grid justify-items-center' id='btn1'>Appointment</button>
  </div>
  
  
  
  
  
  </div>
    
    
    </>
  )
}
