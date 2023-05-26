import React from 'react'
import './studypage.css'
import { Navbar } from '../Navbar'
import { Carousel } from '../Carousel'
import { Footer } from '../Footer'
import { Study } from '../Study'
export const Studypage = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <Study></Study> 
    <div className='quicklinkcontainerstudy'>
    <div className='quicklinksstudy mt-20 mb-20  '>
     <h2 className='text-center text-3xl mt-5 text-neutral-900'>Recently Reviewed topics</h2>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Arnica-montana</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Aurum-metallicum</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Baptisia</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Bellis-perennis</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Berberis-vulgaris</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Bryonia-alba</h3></a>
     <a><h3 className='text-xl text-neutral-700 text-center mt-5 mb-5'>~Fungai</h3></a>
     </div>
   </div>

    <Footer></Footer>
    </div>
  )
}
