import React from 'react'
import './books.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import B1 from './images/books/book-1.jpg'
import B2 from './images/books/book-2.jpg'
import B3 from './images/books/book-4.jpg'
import B4 from './images/books/book-5.jpg'
export const Books = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
return (
    <>
     
    <h1 className='text-center text-3xl text-sky-400  mb-6'  data-aos='fade-left' data-aos-duration='700'>Books</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       
       <img className='text-center' src={B1} id='cartoon1' ></img>
    
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <img className='text-center' src={B2} id='cartoon1' ></img>
    
  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={B3} id='cartoon1' ></img>
  
 
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={B4} id='cartoon1' ></img>
      
  </div>
  
  
  
  
  
  </div>
    



    </>
  )
}
