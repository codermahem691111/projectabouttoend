import React from 'react'
import { Carousel } from '../Carousel'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import   {Cards}  from '../Cards'
import Picx1 from '../images/Testomonials/img-1.jpg'
import Picx2 from '../images/Testomonials/img-2.jpg'
import Picx3 from '../images/Testomonials/img-3.jpg'
import Picx4 from '../images/Testomonials/img-4.jpg'
import './testomonial.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export const Testomonial = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
    
    <Navbar></Navbar>
    <Carousel></Carousel>
    <h2  className='text-3xl  text-sky-500  text-center'>Doctors testomonails and reviews</h2>
    <p className='text-center text-xl text-stone-700' id='text'>Homeodoctor International gives the highest importance to our patient’s satisfaction and their well being. We pride ourselves for providing excellent services and world-class homeopathy treatments to our patients and our reviews/feedback from our happy patients prove it.</p>
    
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardnotesto1' data-aos="zoom-in-up" data-aos-duration="1000">
       <h1 className='text-center  mt-10 text-xl'>Our  Doctords</h1>
       <img className='text-center' src={Picx1} id='picx1' ></img>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
        <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
    </div>
   
    <div className="xs:ml-20" id='cardnotesto2' data-aos="zoom-in-up" data-aos-duration="1000">
    <h1 className='text-center mt-10 text-xl'>Our  Books</h1>
    <img className='text-center ' src={Picx4} id='picx1' ></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
     <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="  " id='cardnotesto1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center mt-10 text-xl'>Medicines</h1>
  <img className='text-center' src={Picx3} id='picx1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  <div className="xs:ml-20" id='cardnotesto2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center  mt-10 text-xl'>Shops</h1>
  <img className='text-center' src={Picx2} id='picx1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
  
  
  
  
  
  </div>
    
  <div className='quicklinkcontainer'>
   <div className='quicklinks mt-20 mb-20  '>
    <h2 className='text-center text-3xl mt-5 text-neutral-900'>Quick links</h2>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Written Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Doctors  Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Customers  Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Customers  Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Customers  Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Customers  Testimonial</h3></a>
    <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Customers  Testimonial</h3></a>
    </div>
  </div>

    <Footer></Footer>
    </div>
  )
}
