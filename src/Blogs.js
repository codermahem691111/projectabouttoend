import React from 'react'
import './blog.css'
import Bl1 from './images/blogs/blog-1.jpg'
import Bl2 from './images/blogs/blog-3.jpg'
import Bl3 from './images/blogs/blog-4.jpg'
import Bl4 from './images/blogs/blog-5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
export const Blogs = () => {

    useEffect(() => {
        AOS.init();
      }, [])



  return (
    <>
       
    <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>Blogs</h1>
    <div className="flex flex-row justify-items-center items-center mt-10"  id='rowblog1'>
    <div className="basis-1/5 ml-5" id='cardblogno1' data-aos="zoom-in-up" data-aos-duration="1000">
 
       <img className='text-center' src={Bl1} id='cartoonblog1' ></img>
       <h1 className='text-center  text-xl'>Enjoy Your Parking! </h1>
       <p className='text-xs' id='blogp'>Think about it the finest hotels, restaurants, bars, hospitals, airports and special events all have one thing in common asf asdf asdf asdf asd</p>     
    </div>
   
    <div className="basis-1/5 ml-5" id='cardblogno2' data-aos="zoom-in-up" data-aos-duration="1000">
  
    <img className='text-center ' src={Bl2} id='cartoonblog1' ></img>
    <h1 className='text-center  text-xl'>Enjoy Your Parking! </h1>
       <p className='text-xs'  id='blogp'>Think about it the finest hotels, restaurants, bars, hospitals, airports and special events all have one thing in common asf asdf asdf asdf asd</p>     
   
  </div>
  
  <div className="basis-1/5 ml-5" id='cardblogno1'  data-aos="zoom-in-up" data-aos-duration="1000">

  <img className='text-center' src={Bl3} id='cartoonblog1' ></img>
  <h1 className='text-center  text-xl'>Enjoy Your Parking! </h1>
  <p className='text-xs'  id='blogp'>Think about it the finest hotels, restaurants, bars, hospitals, airports and special events all have one thing in common asf asdf asdf asdf asd</p>     

  </div>
  
  <div className="basis-1/5 ml-5" id='cardblogno2'  data-aos="zoom-in-up" data-aos-duration="1000">
 
  <img className='text-center' src={Bl4} id='cartoonblog1' ></img>
  <h1 className='text-center  text-xl'>Enjoy Your Parking! </h1>
  <p className='text-xs'  id='blogp'>Think about it the finest hotels, restaurants, bars, hospitals, airports and special events all have one thing in common asf asdf asdf asdf asd</p>     
 
  </div>
  
  
  
  
  
  </div>

    
    
    </>
  )
}
