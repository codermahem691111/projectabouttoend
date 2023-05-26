import React from 'react'
import D1  from './images/doctor.jpg'
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css'
import {FcCallback } from 'react-icons/fc';




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";




export const Carousel = () => {
  return (
    <>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper" id='mySwiper'
  >
 
  <SwiperSlide  className='slide1'>
  <div className="flex flex-col py-3 text-center items-center" data-aos="fade-left"  id="herodiv"  data-aos-duration="3000">           
  <h2 className="text-4xl text-stone-300 items-center text-center">This is <span className="text-pink-800">Homeo</span></h2>
  <h2 className='text-4xl text-stone-300 items-center text-center'>Titleopotion</h2> 
  <p className="text-sky-300 text-2xl text-bold ml-20 mr-20">Homeopathic treatments for various ailments such as allergies, skin disorders, respiratory problems, digestive disorders, and more.</p>
   <div className='flex flex-row mt-10 mb-10'>
   <FcCallback className='text-4xl'/>
   <h1 className='ml-5 text-slate-100'>Always Available</h1>
   </div>
</div>
  
  </SwiperSlide>
  <SwiperSlide className='slide2'>
  
  <div className="flex flex-col py-3 text-center items-center" data-aos="fade-left"  id="herodiv"  data-aos-duration="3000">           
  <h2 className="text-4xl text-stone-300 items-center text-center">This is <span className="text-pink-800">Homeo</span></h2>
  <h2 className='text-4xl text-stone-300 items-center text-center'>Titleopotion</h2> 
  <p className="text-sky-300 text-2xl text-bold ml-20 mr-20">Consultations with homeopathic doctors to understand the patient's symptoms and recommend the appropriate homeopathic treatment.</p>
  <div className='flex flex-row mt-10 mb-10'>
  <FcCallback className='text-4xl'/>
  <h1 className='ml-5 text-slate-100'>Always Available</h1>
  </div>
</div>
  
  </SwiperSlide>
  </Swiper>
    
    </>
  )
}
