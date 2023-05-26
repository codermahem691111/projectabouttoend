import React from 'react'
import './cards.css'
import Cartoon1 from './images/cartoon1.svg'
import Cartoon3 from './images/medicine.svg'
import Cartoon2 from './images/shopping.svg'
import Cartoon4 from './images/book.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
export const Cards = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
     
       
    <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>What  we have</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       <h1 className='text-center  mt-10 text-xl'>Our  Doctords</h1>
       <img className='text-center' src={Cartoon1} id='cartoon1' ></img>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
        <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <h1 className='text-center mt-10 text-xl'>Our  Books</h1>
    <img className='text-center ' src={Cartoon4} id='cartoon1' ></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
     <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center mt-10 text-xl'>Medicines</h1>
  <img className='text-center' src={Cartoon3} id='cartoon1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center  mt-10 text-xl'>Shops</h1>
  <img className='text-center' src={Cartoon2} id='cartoon1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  
  
  
  
  </div>
    
    
    </>
  )
}
