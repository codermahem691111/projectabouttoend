import React from 'react'
import './shop.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import S1 from './images/Shop/product-1.jpg'
import S2 from './images/Shop/product-2.jpg'
import S3 from './images/Shop/product-3.jpg'
import S4 from './images/Shop/product-4.jpg'
export const Shop = () => {

    useEffect(() => {
        AOS.init();
      }, [])


  return (
    <>
    <h1 className='text-center text-3xl text-sky-400  mb-6'  data-aos='fade-left' data-aos-duration='700'>Shop</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       
       <img className='text-center' src={S1} id='cartoon1' ></img>
    
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <img className='text-center' src={S2} id='cartoon1' ></img>
    
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={S3} id='cartoon1' ></img>
  
 
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={S4} id='cartoon1' ></img>
      
  </div>
  
  
  
  
  
  </div>
    

    
    
    </>
  )
}
