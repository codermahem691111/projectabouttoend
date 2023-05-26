import React from 'react'
import  './study.css' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import P1 from './images/plants/Arnica-montana.png'
import P2 from './images/plants/Aurum-metallicum-.png'
import P3 from './images/plants/Baptisia.png'
import P4 from './images/plants/Bellis-perennis.png'
import P5 from './images/plants/Berberis-vulgaris.png'
import P6 from './images/plants/Bryonia-alba.png'
import P7 from './images/plants/image-1.png'
import P8 from './images/plants/image-2.png'

export const Study = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    

    return (
    <>
    <h1 className='text-center text-3xl text-sky-400 mt-10 mb-10'  data-aos='fade-left' data-aos-duration='700'>Study</h1>
    <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
    <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
       
       <img className='text-center' src={P1} id='cartoon1' ></img>

       <h2 className='text-2xl mt-5'>Arnica-montana</h2>
       
    </div>
   
    <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
    <img className='text-center' src={P2} id='cartoon1' ></img>

    <h2 className='text-2xl mt-5'>Aurum-metallicum</h2>

  </div>
  
  <div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={P3} id='cartoon1' ></img>
 
  <h2 className='text-2xl mt-5'>Baptisia</h2>
 
 
  </div>
  
  <div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={P4} id='cartoon1' ></img>

       <h2 className='text-2xl mt-5'>Bellis-perennis</h2>
        
  </div>
  
  
  
  
  
  </div>
    
  <div className=" grid grid-cols-4  gap-4   xs:grid-cols-2 xs:mr-25 xs:ml-0 text-center"  id='row1'>
  <div className="" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
     
     <img className='text-center' src={P5} id='cartoon1' ></img>

     <h2 className='text-2xl mt-5'>Berberis-vulgaris</h2>
     
  </div>
 
  <div className="xs:ml-20" id='cardno2' data-aos="zoom-in-up" data-aos-duration="1000">
  <img className='text-center' src={P6} id='cartoon1' ></img>

  <h2 className='text-2xl mt-5'>Bryonia-alba</h2>

</div>

<div className="  " id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
<img className='text-center' src={P7} id='cartoon1' ></img>

<h2 className='text-2xl mt-5'>Fungai</h2>


</div>

<div className="xs:ml-20" id='cardno2'  data-aos="zoom-in-up" data-aos-duration="1000">
<img className='text-center' src={P8} id='cartoon1' ></img>

     <h2 className='text-2xl mt-5'>Alleium Cepa</h2>
      
</div>





</div>
  
    
    </>
  )
}
