import React from 'react'
import { Navbar } from '../Navbar'
import {Carousel} from '../Carousel'
import  {Footer} from '../Footer'
import './howitswork.css'
import Imgw1 from '../images/howitsworks/login.svg'
import Imgw2 from '../images/howitsworks/mail.svg'
import Imgw3 from '../images/howitsworks/problem.svg'
import Imgw4 from '../images/howitsworks/selectdoctor.svg'
export const Howitswork = () => {
  return (
    <>
    <Navbar></Navbar>    
    <Carousel></Carousel>   
    <h2 className='text-3xl text-blue-400 text-center mt-5 mb-5'>How its work</h2>
    <div className='' id='container1'>
    
      <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
        <div id='textdiv'> 
        <h2 className='text-2xl  text-sky-300'>Registration</h2>
        <p className='text-sky-900'> We can provide consultations to patients who are seeking alternative
         and natural treatments for their health condition.We offer patients access to hospital-based treatments and procedures 
         that are necessary for their health, such as laboratory tests, 
         imaging studies, and surgeries.You can offer a holistic approach to patient care, which focuses on treating the whole person rather than just their symptoms. This could include nutritional counseling, 
         stress management techniques, and other complementary therapies.
         We can provide care for patients who require immediate attention for acute health issues such as infections, injuries, and other medical emergencies.
         </p>
         
         
         </div>

        <div id='imagediv'> <img  src={Imgw1} id='imgw'></img> </div>
      
      </div>
    </div>
    
    
    <div className='' id='container1'>
    
      <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
        
      <div id='imagediv'> <img  src={Imgw2} id='imgw'></img> </div>
      
      <div id='textdiv'> 
        <h2 className='text-2xl  text-sky-300'>contact us</h2>
        <p className='text-sky-900'> 
        Doctors: It's important for us to have qualified and experienced homeopathic doctors on staff to ensure that patients receive proper treatment. We may want to consider hiring doctors with a variety of specialties, such as pediatrics or dermatology, to offer a wide range of services.

        Medicine: Homeopathic medicine relies on natural remedies and ingredients, so it's important for us to stock our hospital with high-quality, pure medicines that are free from contaminants. We may want to work with a trusted supplier or manufacturer to ensure that our medicines meet the necessary standards.
        
        Shop: In addition to offering medical services, we may want to consider opening a shop where patients can purchase homeopathic remedies, books, and other health-related products. This can help generate additional revenue for our hospital while also providing patients with access to the tools they need to maintain their health.
        
        Books: It's important for us to have a variety of books on homeopathy and related topics available for patients and staff to read. This can help promote education and understanding about homeopathic medicine, as well as provide a resource for patients who may want to learn more about their conditions and treatment options.
        
        
        </p>
         
         
         </div>

       
      
      </div>
    </div>      
    <div className='' id='container1'>
    
    <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
      <div id='textdiv'> 
      <h2 className='text-2xl  text-sky-300'>Select yoour doctor</h2>
      <p className='text-sky-900'> We can provide consultations to patients who are seeking alternative
       and natural treatments for their health condition.We offer patients access to hospital-based treatments and procedures 
       that are necessary for their health, such as laboratory tests, 
       imaging studies, and surgeries.You can offer a holistic approach to patient care, which focuses on treating the whole person rather than just their symptoms. This could include nutritional counseling, 
       stress management techniques, and other complementary therapies.
       We can provide care for patients who require immediate attention for acute health issues such as infections, injuries, and other medical emergencies.
       </p>
       
       
       </div>

      <div id='imagediv'> <img  src={Imgw4} id='imgw'></img> </div>
    
    </div>
  </div>
  
  
  <div className='' id='container1'>
  
    <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
      
    <div id='imagediv'> <img  src={Imgw3} id='imgw'></img> </div>
    
    <div id='textdiv'> 
      <h2 className='text-2xl  text-sky-300'>Tell your problem</h2>
      <p className='text-sky-900'> 
      Doctors: It's important for us to have qualified and experienced homeopathic doctors on staff to ensure that patients receive proper treatment. We may want to consider hiring doctors with a variety of specialties, such as pediatrics or dermatology, to offer a wide range of services.

      Medicine: Homeopathic medicine relies on natural remedies and ingredients, so it's important for us to stock our hospital with high-quality, pure medicines that are free from contaminants. We may want to work with a trusted supplier or manufacturer to ensure that our medicines meet the necessary standards.
      
      Shop: In addition to offering medical services, we may want to consider opening a shop where patients can purchase homeopathic remedies, books, and other health-related products. This can help generate additional revenue for our hospital while also providing patients with access to the tools they need to maintain their health.
      
      Books: It's important for us to have a variety of books on homeopathy and related topics available for patients and staff to read. This can help promote education and understanding about homeopathic medicine, as well as provide a resource for patients who may want to learn more about their conditions and treatment options.
      
      
      </p>
       
       
       </div>

     
    
    </div>
  </div>         
  <Footer></Footer> 
  
  </>
  )
}
