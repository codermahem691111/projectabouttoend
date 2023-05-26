import React from 'react'
import './contact.css'
import { Carousel } from '../Carousel'
import Mailbox  from '../images/Aboutusgif/96060-tta-contact-us.gif'
import Loc from '../images/Aboutusgif/29582-looping-idle-location-animation.gif'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
export const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <Carousel></Carousel>
    
    <div className='' id='container1'>
    
    <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
      <div id='textdiv'> 
      <h2 className='text-2xl  text-sky-300'>Call  Us</h2>
      <p className='text-sky-900'> 
      You have an event and want to impress your guests and visitors? All you have to do is submit your application and we promise that you will get the highest degree of organization Submit your request now! We provide catering services for large and small companies and institutions. Our staff is made up of qualified individuals and a highly qualified and experienced chef Weddings, parties and special occasions

      </p>
      <p className='text-xl text-sky-800'>Phone : +88 12345678901</p> 
      <p className='text-xl text-sky-800'>Email : info@homeodoctor.com</p>
       </div>

      <div id='imagediv'> <img  src={Mailbox}></img> </div>
    
    </div>
  </div>
  
  <div className='' id='container1'>
    
  <div className='grid  grid-cols-2 ml-10  mr-10  p-6 xs:grid-cols-1'>
    
  <div id='imagediv'> <img  src={Loc}></img> </div>
  
  <div id='textdiv'> 
    <h2 className='text-2xl  text-sky-300'>Our location?</h2>
    <p className='text-sky-900'> 
    Dhaka Bangladesh - asdklfj asldkfj aslkf aadsf - asdf aklsjdf alksdfadsf af ljasf. Use this form for immediate follow-up if you would like us to serve you.. Which type of our professional services are most important to you? Dhaka, Bangladesh </p>

    <p className='text-sky-900'>  Dhaka, Bangladesh
    
    </p>
     
     
     </div>

   
  
  </div>
</div> 

    
    
    <h2  className='text-2xl text-center text-blue-800'>Contact <span className='text-pink-400'>Us</span></h2>
      <form>
      <input  type='text' name='name' id='' placeholder='your  name?'></input>
      <input  type='email' name='email' id=''  placeholder='exmp@.....com'></input>
      <input  type='phone' name='phone' id=''  placeholder='+880.....' ></input>
      <textarea name='message' id='' cols='30' rows='10' ></textarea>
      <button type='submit'  id='btnsave'>Send  message</button>
      </form>
    


  <Footer></Footer>

</>
  )
}
